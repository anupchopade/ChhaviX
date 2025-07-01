// import React, { useState } from 'react'
// import withBg from '../assets/withBg.jpg'
// import WoBg from '../assets/WoBg.png'

// const Slider = () => {
//     const [sliderPosition,setSliderPosition]=useState(50)

//     const handleSliderChange=(e)=>{
//         setSliderPosition(e.target.value)
//     }
//   return (
//     <div className='pb-10 md:py-20 mx-2'>
//       <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Accuracy & Perfection</h1>
//       <div className='relative w-96 h-64 max-w-3xl overflow-hidden m-auto rounded-xl' >
//         <img src={withBg} className='w-full h-full' style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}/>
//         <img src={WoBg} className='w-full h-full absolute top-0 left-0' style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}/>
//         <input className='absolute left-1/2 -translate-x-1/2 top-[50%] w-72 slider'  type='range' min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
//       </div>
//     </div>
//   )
// }

// export default Slider



import React, { useState } from 'react'
import withBg from '../assets/withBg.jpg'
import WoBg from '../assets/WoBg.png'

const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <div className='pb-10 md:py-20 mx-4'>
      <h1 className="text-5xl font-bold text-gray-800 mb-16 text-center">Accuracy & Perfection</h1>

      <div className='relative w-full max-w-4xl h-[28rem] overflow-hidden mx-auto rounded-2xl shadow-lg border border-gray-300 bg-white'>

        {/* With Background Image */}
        <img
          src={withBg}
          alt="With Background"
          className='w-full h-full object-cover'
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Without Background Image */}
        <img
          src={WoBg}
          alt="Without Background"
          className='w-full h-full absolute top-0 left-0 object-cover'
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        {/* Slider */}
        <input
          type='range'
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className='absolute z-10 appearance-none w-[90%] left-1/2 -translate-x-1/2 bottom-6 h-2 rounded-full bg-gray-300 outline-none
            slider-thumb transition-all duration-300'
        />

        {/* Custom Thumb Styling via Tailwind */}
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #3b82f6;
              cursor: pointer;
              box-shadow: 0 0 6px rgba(0,0,0,0.2);
              transition: all 0.3s ease;
              margin-top: -11px;
            }
            input[type="range"]::-moz-range-thumb {
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #3b82f6;
              cursor: pointer;
              box-shadow: 0 0 6px rgba(0,0,0,0.2);
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default Slider
