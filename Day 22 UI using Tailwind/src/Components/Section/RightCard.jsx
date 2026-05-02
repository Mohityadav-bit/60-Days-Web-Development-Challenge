import React from 'react'

import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="h-full w-50 rounded-3xl overflow-hidden relative flex flex-nowrap shrink-0">

      {/* Image */}
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="img"
      />
    <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
} 

export default RightCard
