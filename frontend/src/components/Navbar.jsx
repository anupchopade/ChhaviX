import React from "react";
import logo from "../assets/logo.png";
import credits from "../assets/credits.svg";

import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate=useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="px-4 lg:px-8">
      <div className="flex items-center justify-between py-3 lg:py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            <Link to="/">ChhaviX</Link>
          </span>
        </div>
        {isSignedIn ? (
         <div className="flex items-center gap-3 sm:gap-4">
  <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 shadow-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:shadow-lg transition duration-300">
    <img
      src={credits}
      alt="credits icon"
      className="w-6 h-6 sm:w-7 sm:h-7"
    />
    <span className="text-sm sm:text-base font-medium text-gray-800">
      {credit} Credits
    </span>
  </button>
  <p className="text-gray-700 text-sm sm:text-base font-medium max-sm:hidden">
    Hi, {user.fullName}
  </p>
  <UserButton />
</div>

        ) : (
          <button
            onClick={() => openSignIn({})}
            className="sm:px-8 sm:py-3 text-sm rounded-full px-4 py-2 text-white flex items-center gap-4 bg-zinc-800 hover:bg-blue-600"
          >
            Get Started <span className="text-2xl font-bold">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
