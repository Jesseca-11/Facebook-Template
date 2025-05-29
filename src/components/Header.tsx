import React from 'react'

import Middle from './Middle'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'



const Header = () => {
  return (
    <div className='h-fit bg-[#181820] ps-3 lg:ps-0 block lg:flex w-[100%] justify-between overflow-hidden '>
      <div className="w-[24%]">
      <LeftSidebar />
      </div>
      <div className="w-[100%] lg:w-[53%]">
        <Middle />
      </div>
      <div className="w-[22%]">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Header
