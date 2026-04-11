import React from 'react'
const Banner = ( {title,bgimage}) => {
  return (
    <div className=" h-[50vh] md:w-full w-[60vh] mt-25 flex justify-center items-center bg-center bg-cover relative"
    style={{backgroundImage:`url(${bgimage})`}}>
        <h2 className='md:text-5xl text-2xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
    <div className='bg-black/40 absolute inset-0'></div>
    </div>
  )
}

export default Banner
