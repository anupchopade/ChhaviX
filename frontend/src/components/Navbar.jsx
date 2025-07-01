// import React from "react";
// import logo from "../assets/logo.png";
// import credits from "../assets/credits.svg";

// import { Link, useNavigate } from "react-router-dom";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { useEffect } from "react";

// const Navbar = () => {
//   const { openSignIn } = useClerk();
//   const { isSignedIn, user } = useUser();
//   const { credit, loadCreditsData } = useContext(AppContext);
//   const navigate=useNavigate()

//   useEffect(() => {
//     if (isSignedIn) {
//       loadCreditsData();
//     }
//   }, [isSignedIn]);

//   return (
//     <div className="px-4 lg:px-8">
//       <div className="flex items-center justify-between py-3 lg:py-4 max-w-screen-xl mx-auto">
//         <div className="flex items-center gap-2">
//           <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
//             <Link to="/">ChhaviX</Link>
//           </span>
//         </div>
//         {isSignedIn ? (
//          <div className="flex items-center gap-3 sm:gap-4">
//   <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 shadow-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:shadow-lg transition duration-300">
//     <img
//       src={credits}
//       alt="credits icon"
//       className="w-6 h-6 sm:w-7 sm:h-7"
//     />
//     <span className="text-sm sm:text-base font-medium text-gray-800">
//       {credit} Credits
//     </span>
//   </button>
//   <p className="text-gray-700 text-sm sm:text-base font-medium max-sm:hidden">
//     Hi, {user.fullName}
//   </p>
//   <UserButton />
// </div>

//         ) : (
//           <button
//             onClick={() => openSignIn({})}
//             className="sm:px-8 sm:py-3 text-sm rounded-full px-4 py-2 text-white flex items-center gap-4 bg-zinc-800 hover:bg-blue-600"
//           >
//             Get Started <span className="text-2xl font-bold">→</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React from "react";
import credits from "../assets/credits.svg";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition duration-300 tracking-wide"
          >
            ChhaviX
          </Link>

          {/* Authenticated */}
          {isSignedIn ? (
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Credits Badge */}
              <button
                onClick={() => navigate("/buy")}
                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm bg-white border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-1.5 rounded-full">
                  <img src={credits} alt="credits" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800">
                  {credit} Credits
                </span>
              </button>

              {/* Greeting */}
              <span className="hidden sm:block text-sm font-medium text-gray-600">
                Welcome, <span className="text-gray-800 font-semibold">{user.fullName}</span>
              </span>

              {/* User Avatar */}
              <UserButton />
            </div>
          ) : (
            // Sign In Button
            <button
              onClick={() => openSignIn({})}
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get Started <span className="text-xl font-bold">→</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
