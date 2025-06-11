import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';



const Navbar = () => {

  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()

  return (
    <div className="px-4 lg:px-8">
      <div className="flex items-center justify-between py-3 lg:py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            <Link to="/">ChhaviX</Link>
          </span>
        </div>
        {
            isSignedIn
            ? <div>
              <UserButton/>
            </div>
            :<button onClick={()=> openSignIn({})} className="sm:px-8 sm:py-3 text-sm rounded-full px-4 py-2 text-white flex items-center gap-4 bg-zinc-800 hover:bg-blue-600">
            Get Started <span className="text-2xl font-bold">→</span>
          </button>
          }
        
      </div>
    </div>
  );
};


export default Navbar 