import React from 'react'
import {useEffect,useState} from "react";

const Eyes = () => {
    const [rotate,setrotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
           let mouseX=e.clientX;
           let mouseY=e.clientY;

           let deltaX=mouseX-window.innerWidth/2;
           let deltaY=mouseY-window.innerHeight/2;

           var angle=(Math.atan2(deltaY,deltaX))*(180/(Math.PI));
           setrotate(angle-180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-no-repeat bg-cover bg-center '> 
        <div className='flex absolute gap-10   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
              <div className='flex items-center justify-center lg:w-[15vw] lg:h-[15vw] h-[30vw] w-[30vw] bg-zinc-200 rounded-full'>
                 <div className='relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                     <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8   '>
                         <div className='lg:w-8 lg:h-8 w-4 h-4 rounded-full bg-zinc-200'></div>
                     </div>
                    
                 </div>
              </div>
              <div className='flex items-center justify-center lg:w-[15vw] lg:h-[15vw] h-[30vw] w-[30vw] bg-zinc-200 rounded-full'>
              <div className='relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                     <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8   '>
                         <div className='lg:w-8 lg:h-8 w-4 h-4 rounded-full bg-zinc-200'></div>
                     </div>
                    
                 </div>
              </div>
        </div>
        </div>

    </div>
  )
}

export default Eyes