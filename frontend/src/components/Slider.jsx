import React, { useState } from 'react'
import withBg from '../assets/withBg.jpg'
import WoBg from '../assets/WoBg.png'

const Slider = () => {
    const [sliderPosition,setSliderPosition]=useState(50)

    const handleSliderChange=(e)=>{
        setSliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Accuracy & Perfection</h1>
      <div className='relative w-96 h-64 max-w-3xl overflow-hidden m-auto rounded-xl' >
        <img src={withBg} className='w-full h-full' style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}/>
        <img src={WoBg} className='w-full h-full absolute top-0 left-0' style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}/>
        <input className='absolute left-1/2 -translate-x-1/2 top-[50%] w-72 slider'  type='range' min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
      </div>
    </div>
  )
}

export default Slider
