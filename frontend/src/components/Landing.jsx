import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full lg:h-screen pt-[1px]  '>
        <div className='textstructure mt-32 px-20 '>
          {["We Create","Eye Opening","Presentations"].map((item,index)=>{
              return ( <div key={index} className='masker'>
                <div className='w-fit flex  '>
                  {index===1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.87, 0, 0.13, 1],duration:1}} className=' mr-1 w-[8vw] h-[6vw] bg-red-600 relative top-[1vw] rounded'></motion.div>)}
                <h1 className='text-white uppercase h-full text-[8vw]  leading-[7vw] tracking-tighter font-semibold '>{item}</h1>
               </div>
            </div>)
          })
          }
        </div>
        <div className='flex gap-[2vw] justify-between items-center py-5 lg:px-20 px-10 border-t-[1px] border-zinc-700 mt-32'>
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
              return(<p key={index} className='lg:text-md text-[10px] text-white font-light tracking-tight leading-none'>{item}</p>)
          })}
          <div className='start flex items-center gap-2  '>
            <div className='px-5 lg:py-2 py-1 border-[1px] border-zinc-600 font-light lg:text-md text-[15px] capitalize rounded-full text-white'>start the project</div>
            <div className='w-9 h-9 flex lg:text-md text-[15px] items-center justify-center rounded-full border-[1px] border-zinc-600 text-white'><MdArrowOutward /></div>
          </div>
        </div>

    </div>
  )
}

export default Landing