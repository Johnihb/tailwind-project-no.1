import React from 'react'
import Sidebar from './component/sidebar'
import HeroSection from './component/herosection'
import Card from './assets/Card'
const Main = () => {
  return (

    <main className=' mt-20 relative top-13.5 w-full  right-0  h-full flex flex-col gap-2 '>

      <Sidebar />
      <HeroSection />
    <section className=' grid md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-4 absolute top-7 left-27  w-full]'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>

         
      
    </main>
  
  )
}

export default Main