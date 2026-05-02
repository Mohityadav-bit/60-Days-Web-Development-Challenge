import React from 'react'
import Section from './Components/Section/Section'
import Section2 from './Components/section02/Section2'

const App = () => {

  const users =[
  {
    img: 'https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg',
    intro: '',
    tag: 'Satisfied',
  },
  {
    img: 'https://i.pinimg.com/736x/4c/7c/1b/4c7c1bc4ab7ff26f7fff531154c56923.jpg',
    intro: '',
    tag: 'Underbancked',
  },
  {
    img: 'https://i.pinimg.com/1200x/de/f7/d5/def7d5b80651f4a910617e8e295d4c8d.jpg',
    intro: '',
    tag: 'Happy',
  },
  {
    img: 'https://i.pinimg.com/736x/d2/25/87/d22587b932f96fcb052b8cb681519543.jpg',
    intro: '',
    tag: 'Happy',
  },
  {
    img: 'https://i.pinimg.com/736x/cc/17/ce/cc17ceb6ca487fa80320e34e7ae486fe.jpg',
    intro: '',
    tag: 'Satisfied',
  },
  {
    img: 'https://i.pinimg.com/736x/32/0a/6a/320a6a8ba0537187f32b69a18535f850.jpg',
    intro: '',
    tag: 'Unsatisfied',
  },


  ]
  return (
    <div>
      <Section users={users}/>
      <Section2/>
    </div>
  )
}

export default App
