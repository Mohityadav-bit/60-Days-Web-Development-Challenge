import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'




const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      {/* App  */}
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>

    </div>























 
  )
}

export default App
