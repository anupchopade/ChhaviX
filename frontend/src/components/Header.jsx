// import React from "react";
// import upload from "../assets/upload.svg";
// import img_header from "../assets/img_header.jpeg";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Header = () => {
//   const { removeBg } = useContext(AppContext);

//   return (
//     <div className="relative max-w-screen-xl mx-auto px-4 lg:px-8">
//       {/* Content Row */}
//       <div className="flex items-center justify-between flex-wrap gap-y-10 mt-10 py-3 max-sm:flex-col-reverse sm:mt-20">
//         {/* Left Side */}
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
//             Snap. Upload. <br className="max-md:hidden" />
//             <span className="text-blue-600 font-extrabold animate-pulse">
//               Vanish
//             </span>{" "}
//             the Background
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 mb-8">
//             Remove background from your images in seconds with our AI-powered
//             tool
//           </p>
//           <div>
//             <input
//               onChange={(e) => {
//                 const image = e.target.files[0];
//                 removeBg(image);
//               }}
//               type="file"
//               accept="image/* "
//               className="hidden"
//               id="fileInput"
//             />
//             <label
//               htmlFor="fileInput"
//               className="cursor-pointer hover:scale-105 inline-flex items-center gap-2 sm:px-8 sm:py-3 px-4 py-2 text-blue-600 font-extrabold rounded-full bg-slate-200 hover:bg-gray-100 transition-colors duration-200"
//             >
//               <img src={upload} alt="upload" className="w-6 h-6" />
//               <span>Upload Image</span>
//             </label>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="w-full  sm:w-auto flex justify-center  sm:justify-end">
//           <img
//             src={img_header}
//             alt="Header illustration"
//             className="w-48 sm:w-60 lg:w-72"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import upload from "../assets/upload.svg";
import img_header from "../assets/img_header.jpeg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="relative min-h-screen bg-slate-300 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-25 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      {/* Content Row */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-20 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Side */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 leading-tight animate-fade-in-up">
              Snap. Upload.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 animate-pulse">
                Vanish
              </span>{" "}
              <span className="text-slate-800">the Background</span>
            </h1>
          </div>

          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-500">
            Remove background from your images in seconds with our AI-powered
            tool
          </p>

          <div className="pt-8 animate-fade-in-up animation-delay-1000">
            <input
              onChange={(e) => {
                const image = e.target.files[0];
                removeBg(image);
              }}
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
            />

            <label
              htmlFor="fileInput"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button Content */}
              <div className="relative flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <img
                    src={upload}
                    alt="upload"
                    className="w-4 h-4 filter brightness-0 invert"
                  />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  Upload Image
                </span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </label>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            {/* Soft Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 rounded-3xl blur-lg opacity-20"></div>

            {/* Image Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-3 border border-white/40 shadow-xl">
              <img
                src={img_header}
                alt="header"
                className="w-full max-w-md h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />

              {/* Clean Floating Elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-ai-pulse">
                <span className="text-white font-bold text-sm">AI</span>
              </div>

              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-1000">
                <span className="text-white text-lg">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, -15px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
          @keyframes pulseAI {
  0%, 100% { box-shadow: 0 0 0 0 rgba(56,189,248, 0.6); }
  50% { box-shadow: 0 0 0 10px rgba(56,189,248, 0); }
}
.animate-ai-pulse {
  animation: pulseAI 2s infinite;
}
      `}</style>
    </div>
  );
};

export default Header;
