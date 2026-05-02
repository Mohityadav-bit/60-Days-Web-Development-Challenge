import React from 'react'
import NavBar from './NavBar'
import Page_1_Contenent from './Page_1_Contenent'

const Section = (props) => {
  console.log(props.users);
  return (
    <div className='h-screen w-full bg-blue-300'>
      <NavBar/>
      <Page_1_Contenent users={props.users}/>
    </div>
  )
}

export default Section
