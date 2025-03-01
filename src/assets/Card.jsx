import React from 'react'

const Card = () => {
  return (
    <div className=' grid gap-2 grid-col-2 shadow-xl rounded-xl text-[min(10vw ,70px)]'>
      <div >
      <img src="https://th.bing.com/th/id/OIP.WhaW3C7dV49LM_2ZNrOYjAHaEJ?rs=1&pid=ImgDetMain" className='w-[100%]  rounded-xl' alt="" />
      </div>
      
      
      <div className='flex gap-2 '>
      <img src="https://th.bing.com/th/id/OIP.TCKF6O7R2QWmTyhAsDdONQHaHa?rs=1&pid=ImgDetMain" className='h-10 rounded-full ' alt="" />
      
      <div className=' flex flex-col gap-2 mt-90 '>
      <h1 className='font-bold leading-5  tracking-tight'>
      An Argument Between Bhide And Popatlal | Taarak Mehta Ka Ooltah Chashmah 
      </h1>
      <p className='text-sm text-slate-500 leading-6 text-[min(10vw ,70px)]'>
      Taarak Mehta Ka Oo.....<br />
      3.85M subscribers
      
      </p>
      </div>
      </div>
    </div>
  )
}

export default Card