import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-19'>
      <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full cursor-pointer active:scale-95'>Target Audience</h4>
      <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm cursor-pointer active:scale-95 drop-shadow-cyan-950'>Digital Banking Platform</button>
    </div>
  )
}

export default NavBar
