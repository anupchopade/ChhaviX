// import React from 'react';
// import download from '../assets/download.svg'
// import upload from '../assets/upload.svg'
// import remove from '../assets/remove.svg'

// const Steps = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12">Steps to remove background image in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse">
//     seconds
//   </span></h2>

//         <div className="flex flex-col sm:flex-row justify-center gap-8">
//           {/* Step 1 */}
//           <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center mb-4">
//               <img src={upload} alt="Upload icon" className="w-10 h-10"/> 
//               <h3 className="text-xl font-semibold text-gray-900 ml-4">Upload image</h3>
//             </div>
//             <p className="text-gray-600">
//               Select and upload an image form your device
            
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center mb-4">
//              <img src={remove} alt="Remove background icon" className="w-10 h-10"/>
//               <h3 className="text-xl font-semibold text-gray-900 ml-4 ">Remove background</h3>
//             </div>
//             <p className="text-gray-600">
//              Remove the background in one click<br/>
            
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-left shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center mb-4">
//               <img src={download} alt="Download icon" className="w-10 h-10"/>
//               <h3 className="text-xl font-semibold text-gray-900 ml-4">Download image</h3>
//             </div>
//             <p className="text-gray-600">
//              Easily download the redefined image
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;


import React from 'react';
import download from '../assets/download.svg'
import upload from '../assets/upload.svg'
import remove from '../assets/remove.svg'

const Steps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-300 from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Steps to remove background image in{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse">
            seconds
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 -translate-y-1/2 z-0 mx-32"></div>
          
          {/* Step 1 */}
          <div className="relative group flex-1 max-w-sm mx-auto">
            <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 relative group-hover:border-blue-300 h-full">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <img src={upload} alt="Upload icon" className="w-8 h-8 filter group-hover:brightness-110"/> 
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Upload image</h3>
              <p className="text-gray-600 leading-relaxed">
                Select and upload an image from your device
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group flex-1 max-w-sm mx-auto">
            <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300 relative group-hover:border-purple-300 h-full">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <img src={remove} alt="Remove background icon" className="w-8 h-8 filter group-hover:brightness-110"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Remove background</h3>
              <p className="text-gray-600 leading-relaxed">
                Remove the background in one click
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group flex-1 max-w-sm mx-auto">
            <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 relative group-hover:border-emerald-300 h-full">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <img src={download} alt="Download icon" className="w-8 h-8 filter group-hover:brightness-110"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Download image</h3>
              <p className="text-gray-600 leading-relaxed">
                Easily download the refined image
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Progress Dots for Mobile */}
        <div className="flex lg:hidden justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Steps;