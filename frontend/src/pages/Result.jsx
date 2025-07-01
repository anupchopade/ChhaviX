// import React from 'react'
// import withBg from '../assets/withBg.jpg'
// import WoBg from '../assets/WoBg.png'
// import { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'
// const Result = () => {

//  const {resultImage,image}=useContext(AppContext)
//   const navigate=useNavigate()

//   return (
//     <div className="flex flex-col items-center p-8 mt-12 bg-white rounded-lg shadow-inner max-w-screen-lg mx-auto">
//       <div className="flex justify-around w-full mb-6">
//         <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md border border-gray-200">
//           <p className="text-lg font-semibold mb-2">Original</p>
//           <img src={image ? URL.createObjectURL(image): null} alt="original" className="rounded-xl w-96 h-64 object-cover" />
//         </div>
//         <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md border border-gray-200">
//           <p className="text-lg font-semibold mb-2">Background Removed</p>
//           <img src={resultImage ? resultImage : null } alt="resulted" className="rounded-xl w-96 h-64 object-cover" />
//         </div>
//         </div>
//       {resultImage && <div className='flex justify-end items-center flex-wrap gap-4 w-full pr-4 pb-4'>
//         <a href="" onClick={()=>navigate('/')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md">Try another Image</a>
//         <a href={resultImage} download className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out shadow-md">Download Image</a>
//       </div>}
//     </div>
//   )
// }

// export default Result



import React from 'react';
import withBg from '../assets/withBg.jpg';
import WoBg from '../assets/WoBg.png';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { resultImage, image } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10 mt-16 bg-gradient-to-tr from-white via-slate-100 to-blue-50 rounded-3xl shadow-2xl max-w-screen-lg mx-auto border border-blue-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-tight">
        ✨ Background Removal Result ✨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Original Image */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-transform hover:scale-[1.03]">
          <p className="text-xl font-medium text-gray-700 mb-4 border-b pb-2 w-full text-center">Original Image</p>
          <img 
            src={image ? URL.createObjectURL(image) : null} 
            alt="original" 
            className="rounded-2xl w-full h-64 object-cover border border-gray-100 shadow-md"
          />
        </div>

        {/* Result Image */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-transform hover:scale-[1.03]">
          <p className="text-xl font-medium text-gray-700 mb-4 border-b pb-2 w-full text-center">Without Background</p>
          <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-100 to-white rounded-2xl border-2 border-dashed border-blue-300">
            {resultImage ? (
              <img 
                src={resultImage} 
                alt="resulted" 
                className="w-full h-full object-cover rounded-2xl shadow-md" 
              />
            ) : (
              <div className="animate-spin rounded-full h-12 w-12 border-[6px] border-blue-500 border-t-transparent"></div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      {resultImage && (
        <div className='flex justify-center items-center flex-wrap gap-6 w-full pt-12'>
          <button 
            onClick={() => navigate('/')} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            🔄 Try Another Image
          </button>
          <a 
            href={resultImage} 
            download 
            className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg hover:scale-105"
          >
            ⬇️ Download Result
          </a>
        </div>
      )}
    </div>
  );
};

export default Result;
