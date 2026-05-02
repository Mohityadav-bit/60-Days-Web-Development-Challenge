import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div>
            {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between  text-white ">
        
        <h2 className="text-2xl bg-amber-50 text-black font-medium rounded-full w-8 h-8 text-center flex justify-center align-middle">{props.id+1}</h2>
        <div className='flex flex-col justify-evenly gap-9 '>

        <p className="text-sm opacity-90 align-text-bottom">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestias sed mollitia iure quibusdam aliquam at.
        </p>

        <div className="flex items-center ">
          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold">
            {props.tag}
          </button>

          <button className="p-2 bg-white text-black rounded-full">
            <ArrowRight />
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default RightCardContent
