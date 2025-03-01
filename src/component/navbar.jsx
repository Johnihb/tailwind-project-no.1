import React from 'react'


const Navbar = () => {
  return (
    <nav className=" fixed flex w-full  z-3 justify-between items-center bg-gray-500">
      <div className='flex gap-2 items-center'>
        <img src="https://icons.iconarchive.com/icons/ionic/ionicons/128/menu-icon.png" className='h-5' alt="" />
      <img src="https://th.bing.com/th/id/R.b02b5d363a610229fe82e82ed0c369b4?rik=lECwiztO4NeaVA&pid=ImgRaw&r=0" className='h-13 ' alt="" />
      </div>


      <div>
         <input type="text" id='search-bar' className='min-w-[10vw] max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] border h-7 border-gray-700 rounded-full grow'  />
         <label htmlFor="search-bar">search</label>
      </div>


      <div className=' flex gap-2 items-center'>
        <button className='border rounded-2xl w-20 h-7'> + Create</button>
        
        <img src="https://th.bing.com/th/id/OIP.ji-gbbDBcL1g7q_xGrxP4gHaHa?rs=1&pid=ImgDetMain" className='h-5' alt="" />
        <img src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/447478504_1007296127832523_3978544244455911541_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=BFiWL-NcqzkQ7kNvgEdBtfT&_nc_oc=AdhKUM1bPzZLUknm69opXKlygTT2ivCMLUDjjP7bc5cBbl8jTDbLWqDBDHufjjvVGTmhCcu-_VUexJL91hkJpmYa&_nc_zt=24&_nc_ht=scontent.fktm19-1.fna&_nc_gid=AKf7O2Gn6-cL1rZMsw5uHU4&oh=00_AYCtyzdsT7k359A0-eFqBNjP8f4AGaVGeWF4vvYwfPql2Q&oe=67C87EC6" alt="" className='h-6 rounded-full' />  
       </div>
    </nav>
  )
}

export default Navbar