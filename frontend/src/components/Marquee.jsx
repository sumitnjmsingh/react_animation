import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="0.1" className='w-full py-10  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
         <div className='text flex text-white border-t-2 border-b-2 border-zinc-600 whitespace-nowrap gap-10 overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-semibold uppercase '>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-semibold uppercase '>we are ochi</motion.h1>
         </div>
    </div>
  )
}

export default Marquee