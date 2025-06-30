import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredits = () => {
  const { backendUrl, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

          const token=await getToken()

          try {
            
            const {data}=await axios.post(backendUrl+'/api/user/verify-razor',response,{ headers: { Authorization: `Bearer ${token}` } })
            if(data.success){
              loadCreditsData()
              navigate('/')
              toast.success('Credits Added')
            }
          } catch (error) {
            console.log(error)
            toast.error(error.message)
          }
      },
    };

    //creating payment
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const paymentRazorpay = async (planId) => {
    try {

      console.log("🚀 Starting payment for plan:", planId);

      const token = await getToken();

      console.log("🔑 Token obtained:", token ? "Yes" : "No");

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { Authorization: `Bearer ${token}` } }
      );


      console.log('📡 Full response:', data)
      console.log('📦 Response data:', data)

      if (data.success) {

        console.log('✅ Payment successful, initializing Razorpay...')
        initPay(data.order);
      }

       else {
        console.log('❌ Payment failed:',data.message)
        toast.error(data.message || 'Payment failed')
      }

    } catch (error) {
      console.log(error);
      console.error('🔴 Payment error:', error)
      console.error('🔴 Error response:', error.data?.data)
      console.error('🔴 Error status:', error.data?.status)


      if (error.data?.message) {
        toast.error(error.data.message)
      } else if (error.data?.status === 401) {
        toast.error('Authentication failed. Please login again.')
      } else {
        toast.error(error.message || 'Payment failed')
      }


      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-16 bg-slate-300 min-h-screen">
      <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-sm mb-8 transition duration-300 ease-in-out hover:bg-gray-300">
        OUR PLANS
      </button>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Choose the plan that's right for you
      </h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
        {/* Basic Plan Card */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Basic</h3>
          <p className="text-gray-500 text-center mb-6">
            Best for personal use.
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $10{" "}
            <span className="text-gray-500 text-lg font-normal">
              /100 credits
            </span>
          </p>
          <button
            onClick={() => paymentRazorpay("Basic")}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full"
          >
            Purchase
          </button>
        </div>

        {/* Advanced Plan Card */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Advanced
          </h3>
          <p className="text-gray-500 text-center mb-6">
            Best for business use.
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $50{" "}
            <span className="text-gray-500 text-lg font-normal">
              /500 credits
            </span>
          </p>
          <button
            onClick={() => paymentRazorpay("Advanced")}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full"
          >
            Purchase
          </button>
        </div>

        {/* Business Plan Card */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Business
          </h3>
          <p className="text-gray-500 text-center mb-6">
            Best for enterprise use.
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $250{" "}
            <span className="text-gray-500 text-lg font-normal">
              /5000 credits
            </span>
          </p>
          <button
            onClick={() => paymentRazorpay("Business")}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;
