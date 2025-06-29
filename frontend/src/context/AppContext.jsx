import { useState } from "react";
import { createContext } from "react";
import {SignIn, useAuth, useUser} from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useClerk } from '@clerk/clerk-react';

import { useNavigate } from "react-router-dom";

export const AppContext =createContext()

const AppContextProvider=(props)=>{

    const [credit,setCredit]=useState(false)
    const [image,setImage]=useState(false)
    const [resultImage,setResultImage]=useState(false)

    const backendUrl=import.meta.env.VITE_BACKEND_URL

    const {getToken}=useAuth()
    

    const {isSignedIn}=useUser()

    const {openSignIn}=useClerk()

    const navigate=useNavigate()

    const loadCreditsData =async ()=>{
        try {


            const token= await getToken()
            // const token = await getToken();
console.log("🔐 Token being sent to backend:", token);
console.log("🧾 Token in removeBg():", token);

            //  const {data}=await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
            const { data } = await axios.get(
  backendUrl + '/api/user/credits',
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)

            if(data.success){
                 console.log(data)
                setCredit(data.credits)
                console.log(data.credits)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // const removeBg=async ()=>{
    //     try {
    //         console.log(image)
    //     } catch (error) {
    //           console.log(error)
    //         toast.error(error.message)
    //     }
    // }
    const removeBg = async (image) => {
    try {
        // console.log("Received image:", image);
        // setImage(image); // optional if you still want to store it
        // // Do something with the image here...
        if(!isSignedIn){
            return openSignIn()
        }
        setImage(image)
        setResultImage(false)

        navigate('/result')

        const token=await getToken()

        const formdata=new FormData()
         image && formdata.append('image',image)

         const { data } = await axios.post(
  backendUrl + '/api/image/remove-bg',
  formdata,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  }
)


         //if data is sc\uccess then will get image in base64 format 
         if(data.success){
            setResultImage(data.resultImage)
            data.creditBalance && setCredit(data.creditBalance)
         }else{
            toast.error(data.message)
            data.creditBalance && setCredit(data.creditBalance)
            if(data.creditBalance===0){
            navigate('/buy')}
         }



    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};


    const value={
        credit,setCredit,loadCreditsData,backendUrl,image,setImage,removeBg,resultImage,setResultImage
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider