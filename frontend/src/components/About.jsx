import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-[3vw] font-serif tracking-tight  leading-[3vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[1px] flex lg:flex-row flex-col gap-5 border-[#738146] pt-10 mt-20'>
        <div className='lg:w-1/2 w-full'>
               <h1 className='text-4xl '>Our Approach :</h1>
               <button className='flex items-center gap-5 px-10 py-4 bg-zinc-900 rounded-full mt-5 text-white'>Read More
                  <div className='w-3 h-3 bg-white rounded-full'></div>
               </button>
        </div>
        <div className='lg:w-1/2 w-full h-[60vh] bg-[#869651] rounded-3xl'>
           <img className='w-full h-full rounded-3xl' src="bg.jpeg"></img>
        </div>
        </div>
    </div>
  )
}

export default About