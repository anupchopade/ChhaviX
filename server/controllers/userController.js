
import { Webhook } from 'svix';
import userModel from '../models/userModel.js';
import transactionModel from '../models/transactionModel.js';
import razorpay from 'razorpay';

const clerkWebhooks = async (req, res) => {
  try {
    const payload = req.body.toString('utf8'); // 🔥 RAW BODY STRING
    const headers = {
      'svix-id': req.headers['svix-id'],    
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature']
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers); // 🔐 Signature check

    const { data, type } = evt;
    console.log("✅ Webhook verified:", type);

    if (type === 'user.created') {
      const userData = {
        clerkId: data.id,
        email: data.email_addresses[0].email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url
      };
      await userModel.create(userData);
      console.log("✅ User created in DB");
    }

    if (type === 'user.deleted') {
      await userModel.findOneAndDelete({ clerkId: data.id });
      console.log("✅ User deleted in DB");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// API controleler function for getting users available credits 
const userCredits =async(req,res)=>{
  try{
     
    // const {clerkId}=req.body
     const clerkId = req.clerkId;

    const userData= await userModel.findOne({clerkId})

    res.json({success:true,credits:userData.creditBalance})
  }catch(error){
    console.log(error.message)
    res.json({success:false,message:error.message})
  }
}



// initializing gateway
const razorpayInstance=new razorpay({
  // key_id:process.env.RAZORPAY_KEY_ID,
  // key_secret: process.env.RAZORPAY_KEY_SECRET,
  key_id: 'rzp_test_Cql0YwM8N8C7Si',
  key_secret: 'Lqdiu8iMj2h7WOGBnvS4Jqaz',
})



//API to make payment to buy credits
const paymentRazorpay=async(req,res)=>{

  try {
// console.log("🧾 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// console.log("🧾 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

      // const {clerkId,planId}=req.body
      const clerkId = req.clerkId;  // ✅ From auth middleware
    const { planId } = req.body;

    // console.log("🔍 ClerkId:", clerkId);
    // console.log("🔍 PlanId:", planId);

      const userData=await userModel.findOne({ clerkId})

      if(!userData || !planId){
        console.log("❌ User data:", userData ? "Found" : "Not found");
        return res.json({success:false,message:"Invalid credentials"})
      }

      let credits, plan, amount, date

      switch (planId) {
        case 'Basic':
          plan='Basic'
          credits=3
          amount=99
          break;


      case 'Advanced':
          plan='Advanced'
          credits=5
          amount=149
          break;


          case 'Business':
          plan='Business'
          credits=20
          amount=499
          break;


        default:
          break;
      }

      date=Date.now()

      //creating transaction
      const transactionData={
        clerkId,
        plan,
        amount,
        credits,
        date
      }

      // saving transaction data in database

      const newTransaction=await transactionModel.create(transactionData)

      //creating options fror payments

      const options={
        amount:amount*100,
        currency:process.env.CURRENCY,
        receipt:newTransaction._id

      }
      //creating razorpay order
      await razorpayInstance.orders.create(options,(error,order)=>{
        if(error){
          return res.json({success:false,message:error})
        }
        res.json({success:true,order})
      })

    
  } catch (error) {
     console.log(error.message)
    res.json({success:false,message:error.message})
  }
}



//verifyooing razorpay payments for reflecting the credits

const verifyRazorpay=async (req,res)=>{
  try {

    const { razorpay_order_id}=req.body

    const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id)

    if(orderInfo.status==='paid'){

      const transactionData=await transactionModel.findById(orderInfo.receipt)


      if(transactionData.payment){
        return res.json({success:false, message:'Payment Failed'})
      }

      //adding credits

      const userData=await userModel.findOne({clerkId:transactionData.clerkId})

      const creditBalance= userData.creditBalance + transactionData.credits

      await userModel.findByIdAndUpdate(userData._id,{creditBalance})

      //makign the payment true in Database
      await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true})

      res.json({success:true,message:"Credits reflected"})

    }
    
  } catch (error) {
    console.log(error.message)
    res.json({success:false,message:error.message})
  }
}



export { clerkWebhooks,userCredits , paymentRazorpay,verifyRazorpay};
