import React from 'react'
import HeroContent from './heroContent'
import Arrow from './Arrow'

const Leftcont = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between">
      
      {/* Top content */}
      <HeroContent/>
      {/* Bottom arrow */}
      <Arrow/>

    </div>
  )
}

export default Leftcont
