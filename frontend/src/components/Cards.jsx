import React from 'react'

const Cards = () => {
  return (
    <div className='w-full  flex lg:flex-row flex-col gap-5 items-center px-12 py-20   bg-gray-800'>
        <div className='cardcontainer h-[50vh] lg:w-1/2 w-full rounded-xl'>
            <div className='card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[1.5vw] text-white'>&copy;2019-2024</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] lg:w-1/2 w-full rounded-xl'>
            <div className='card w-1/2 h-full bg-gray-900 rounded-xl flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[1.5vw] text-white'>Rating5.0</button>
            </div>
            <div className='card w-1/2 h-full bg-gray-900 rounded-xl flex items-center justify-center relative'>
                <img className='w-[6vw] h-[6vw] rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[1.5vw] text-white'>Business</button>
            </div>
        </div>

    </div>
  )
}

export default Cards