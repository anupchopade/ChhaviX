import React from "react";
import upload from "../assets/upload.svg";
import img_header from "../assets/img_header.jpeg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 lg:px-8">
      {/* Content Row */}
      <div className="flex items-center justify-between flex-wrap gap-y-10 mt-10 py-3 max-sm:flex-col-reverse sm:mt-20">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Snap. Upload. <br className="max-md:hidden" />
            <span className="text-blue-600 font-extrabold animate-pulse">
              Vanish
            </span>{" "}
            the Background
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Remove background from your images in seconds with our AI-powered
            tool
          </p>
          <div>
            <input
              onChange={(e) => {
                const image = e.target.files[0];
                removeBg(image);
              }}
              type="file"
              accept="image/* "
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer hover:scale-105 inline-flex items-center gap-2 sm:px-8 sm:py-3 px-4 py-2 text-blue-600 font-extrabold rounded-full bg-slate-200 hover:bg-gray-100 transition-colors duration-200"
            >
              <img src={upload} alt="upload" className="w-6 h-6" />
              <span>Upload Image</span> 
            </label>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full  sm:w-auto flex justify-center  sm:justify-end">
          <img
            src={img_header}
            alt="Header illustration"
            className="w-48 sm:w-60 lg:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
