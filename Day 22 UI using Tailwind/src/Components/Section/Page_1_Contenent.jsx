import React from 'react'
import Leftcont from './Leftcont'
import Rightcont from './Rightcont'

const Page_1_Contenent = (props) => {
  return (
    <div className="py-3 px-20 h-[80vh] flex gap-10 items-center">
      <Leftcont/>
      <Rightcont users={props.users}/>
    </div>
  )
}

export default Page_1_Contenent
