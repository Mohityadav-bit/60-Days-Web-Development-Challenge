import React from 'react'
import RightCard from './RightCard'

const Rightcont = (props) => {
  console.log(props.users);


  return (
    <div id='right'  className='h-full w-3/4 p-6 flex flex-nowrap gap-6 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcont
