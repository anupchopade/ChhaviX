import axios from "axios"
import fs from 'fs'
import FormData from 'form-data'
import userModel from "../models/userModel.js"
// import { use } from "react"

//controller fun to remove bg from the image
const removeBgImage=async(req,res)=>{
    try {
        //  return res.json({ success: true, message: "removeBgImage controller reached" })

        // const {clerkId}=req.body
         const {clerkId}=req;
        const user=await userModel.findOne({clerkId})

        if(!user){
            return res.json({success:false,message:'User not Found'})
        }

        if(user.creditBalance===0){
            return res.json({success:false,message:'No Credits',creditBalance:user.creditBalance})
        }

        const imagePath=req.file.path;
        //reading the image file
        const imageFile=fs.createReadStream(imagePath)

        const formdata=new FormData()
        formdata.append('image_file',imageFile)
 
        //using clipdrop api to remove bg
        const {data}=await axios.post('https://clipdrop-api.co/remove-background/v1',formdata,{
            headers:{
                'x-api-key':process.env.CLIPDROP_API,
            },
            responseType:'arraybuffer'
        })

        //sending bg-removed image to frontend
        const base64Image=Buffer.from(data,'binary').toString('base64')

        
    const resultImage=`data:${req.file.mimetype};base64,${base64Image}`
    
    //deducting one credit befor sending to frontend
        await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})


        res.json({success:true, resultImage, creditBalance:user.creditBalance-1, message:'Your Image is READY!!'})



    } catch (error) {
        console.log(error.message)
    res.json({success:false,message:error.message})
    }
}

export {removeBgImage}