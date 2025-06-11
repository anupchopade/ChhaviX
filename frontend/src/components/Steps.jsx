import React from 'react';
import download from '../assets/download.svg'
import upload from '../assets/upload.svg'
import remove from '../assets/remove.svg'

const Steps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Steps to remove background image in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse">
    seconds
  </span></h2>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <img src={upload} alt="Upload icon" className="w-10 h-10"/> 
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Upload image</h3>
            </div>
            <p className="text-gray-600">
              Select and upload an image form your device
            
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
             <img src={remove} alt="Remove background icon" className="w-10 h-10"/>
              <h3 className="text-xl font-semibold text-gray-900 ml-4 ">Remove background</h3>
            </div>
            <p className="text-gray-600">
             Remove the background in one click<br/>
            
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <img src={download} alt="Download icon" className="w-10 h-10"/>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Download image</h3>
            </div>
            <p className="text-gray-600">
             Easily download the redefined image
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
