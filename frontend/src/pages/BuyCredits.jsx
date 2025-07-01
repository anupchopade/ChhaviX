
//NOT REPEATED



import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const plans = [
  { name: "Basic", price: "₹99", credits: "3", id: "Basic" },
  { name: "Advanced", price: "₹149", credits: "5", id: "Advanced" },
  { name: "Business", price: "₹499", credits: "20", id: "Business" },
];

const BuyCredits = () => {
  const { backendUrl, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const initPay = async (order) => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const token = await getToken();
          const { data } = await axios.post(
            `${backendUrl}/api/user/verify-razor`,
            response,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credits Added");
          }
        } catch (error) {
          console.error(error);
          toast.error(error?.response?.data?.message || error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/user/pay-razor`,
        { planId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message || "Payment failed");
      }
    } catch (error) {
      console.error("🔴 Error:", error);
      toast.error(error?.response?.data?.message || error.message || "Payment failed");
    }
  };

  // return (
  //   <div className="flex flex-col items-center py-16 bg-slate-300 min-h-screen">
  //     <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-sm mb-8 hover:bg-gray-300">
  //       OUR PLANS
  //     </button>
  //     <h2 className="text-4xl font-bold text-gray-800 mb-12">
  //       Choose the plan that's right for you
  //     </h2>

  //     <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
  //       {plans.map((plan) => (
  //         <div
  //           key={plan.id}
  //           className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96"
  //         >
  //           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
  //             {plan.name}
  //           </h3>
  //           <p className="text-gray-500 text-center mb-6">
  //             Best for {plan.name === "Basic" ? "personal" : plan.name === "Advanced" ? "business" : "enterprise"} use.
  //           </p>
  //           <p className="text-4xl font-bold text-gray-900 mb-8">
  //             {plan.price}
  //             <span className="text-gray-500 text-lg font-normal">
  //               {" "}/ {plan.credits} credits
  //             </span>
  //           </p>
  //           <button
  //             onClick={() => paymentRazorpay(plan.id)}
  //             className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full"
  //           >
  //             Purchase
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
  <div className="flex flex-col items-center py-20 px-4 sm:px-8 bg-slate-300 min-h-screen font-inter">
    {/* CTA Button */}
    <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:bg-slate-100 transition duration-300 mb-6 text-sm tracking-wide">
      OUR PLANS
    </button>

    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 leading-tight">
      Choose the plan that's right for you
    </h2>

    {/* Plans */}
    <div className="flex flex-wrap justify-center gap-10 w-full max-w-7xl">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="flex flex-col justify-between items-center p-8 bg-white rounded-3xl shadow-xl w-full sm:w-80 lg:w-96 transition-transform transform hover:scale-105 duration-300 border border-slate-200 hover:border-blue-400"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">{plan.name}</h3>
          <p className="text-sm text-gray-500 text-center mb-6 italic">
            Best for {plan.name === "Basic" ? "personal" : plan.name === "Advanced" ? "business" : "enterprise"} use.
          </p>

          <p className="text-4xl font-bold text-gray-900 mb-8">
            {plan.price}
            <span className="text-gray-500 text-lg font-medium"> / {plan.credits} credits</span>
          </p>

          <button
            onClick={() => paymentRazorpay(plan.id)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl w-full transition duration-300 shadow-md hover:shadow-lg"
          >
            Purchase
          </button>
        </div>
      ))}
    </div>
  </div>
);

};

export default BuyCredits;

