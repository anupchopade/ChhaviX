import React from 'react'

const BuyCredits = () => {
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
          <p className="text-gray-500 text-center mb-6">Best for personal use.</p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $10 <span className="text-gray-500 text-lg font-normal">/100 credits</span>
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full">
            Purchase
          </button>
        </div>

        {/* Advanced Plan Card */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Advanced</h3>
          <p className="text-gray-500 text-center mb-6">Best for business use.</p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $50 <span className="text-gray-500 text-lg font-normal">/500 credits</span>
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full">
            Purchase
          </button>
        </div>

        {/* Business Plan Card */}
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 w-full sm:w-80 lg:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Business</h3>
          <p className="text-gray-500 text-center mb-6">Best for enterprise use.</p>
          <p className="text-4xl font-bold text-gray-900 mb-8">
            $250 <span className="text-gray-500 text-lg font-normal">/5000 credits</span>
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ease-in-out w-full">
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
}

export default BuyCredits