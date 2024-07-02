import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <>
      <div className="mt-12 w-full h-[1px] bg-gray-300 opacity-30"></div>
      <div className='flex-col justify-center'>
        <Navbar className='text-emerald-400 opacity-80 flex-col gap-3 hover:opacity-100 transition-opacity duration-200'/>
        <h4 className='text-center text-sm text-gray-500 font-semibold'>Built on NextJS :)</h4>
      </div>
    </>
  )
}

export default Footer