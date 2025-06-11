import React from 'react'
import withBg from '../assets/withBg.jpg'
import WoBg from '../assets/WoBg.png'
const Result = () => {
  return (
    <div className="flex flex-col items-center p-8 mt-12 bg-white rounded-lg shadow-inner max-w-screen-lg mx-auto">
      <div className="flex justify-around w-full mb-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-lg font-semibold mb-2">Original</p>
          <img src={withBg} alt="original" className="rounded-xl w-96 h-64 object-cover" />
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-lg font-semibold mb-2">Background Removed</p>
          <img src={WoBg} alt="resulted" className="rounded-xl w-96 h-64 object-cover" />
        </div>
        </div>
      <div className='flex justify-end items-center flex-wrap gap-4 w-full pr-4 pb-4'>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md">Try another Image</a>
        <a href="#" className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md">Download Image</a>
      </div>
    </div>
  )
}

export default Result