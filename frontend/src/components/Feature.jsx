import { motion } from 'framer-motion'
import React,{useState} from 'react'

const Feature = () => {
   const [ishovering1,sethovering1]=useState(false);
   const [ishovering2,sethovering2]=useState(false);
    
    
  return (
    <div className='w-full py-20'>
       <div className='w-full px-20 text-white border-b-[1px] pb-10 border-zinc-600'>
          <h1 className='text-[3vw] tracking-tight'>Featured projects</h1>
          
       </div>
       <div className='px-10'>
            <div className='cards flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10 w-full'>
                
                <div onMouseEnter={()=>{sethovering1(true)}} onMouseLeave={()=>{sethovering1(false)}} className='cardcontainer lg:w-1/2 w-full  h-[75vh] rounded-xl  relative'>
                   
                   <div className='w-full h-full scale-[0.8]    rounded-xl '>
                      <h1 className='absolute flex text-[#CDEA68] text-6xl left-full overflow-hidden  z-[9] font-bold  -translate-x-[50%] top-1/2 -translate-y-1/2'>
                      {"FYDE".split("").map((item,index)=>{
                        return <motion.span className='inline-block translate-y-full ' initial={{y:"100%"}} animate={ishovering1 ? ({y:"0"}):({y:"100%"})} transition={{ease:"linear",delay:index*.1}}  key={index}>{item}</motion.span>

                      })}
                      </h1>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
                   </div>
                </div>
                <div  onMouseEnter={()=>{sethovering2(true)}} onMouseLeave={()=>{sethovering2(false)}} className='cardcontainer lg:w-1/2 w-full h-[75vh] rounded-xl relative '>
               
                   <div className='w-full h-full  scale-[0.8] rounded-xl '>
                   <h1 className='overflow-hidden absolute flex text-[#CDEA68] text-6xl right-full  z-[9] font-bold  translate-x-[50%] top-1/2 -translate-y-1/2'>
                      {"VISE".split("").map((item,index)=>{
                        return <motion.span className='inline-block translate-y-full ' initial={{y:"100%"}} animate={ishovering2 ? ({y:"0"}):({y:"100%"})} transition={{ease:"linear",delay:index*.1}} key={index}>{item}</motion.span>

                      })}
                   </h1>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></img>
                   </div>
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default Feature