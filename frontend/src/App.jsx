import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from  './pages/BuyCredits'
import Navbar from "./components/Navbar"
import { ToastContainer, toast } from 'react-toastify';


const App=()=>{

  return (
    <div className="bg-slate-300 min-h-screen">
      <ToastContainer position="bottom-right"/>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
         <Route path='/result'  element={<Result/>}/>
          <Route path='/buy'  element={<BuyCredits/>}/>
      </Routes>
    </div>
  )
}

export default App 
