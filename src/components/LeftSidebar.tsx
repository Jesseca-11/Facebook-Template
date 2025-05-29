import React from 'react'
import { sidebarliks } from '../constant'
import Rcb from '../asset/Rcb';
import Test from '../asset/Test';
import Footer from './Footer';
import ProfileImg from '../asset/images/Group 8.png'

const LeftSidebar = () => {
  return (
    <div className='relative bg-[#1F1F27] h-[100%] p-4 w-[100%] hidden lg:block ' >
      <div className="flex justify-start items-center ps-2 gap-4  ">
        <img src={ProfileImg} alt="" className='h-10 w-10' />
        <p className="text-white text-sm font-medium">Virat Kohli</p>
      </div>
      <div className="w-[100%] shadow-lg ">
        {sidebarliks.map(item => (
            <a key={item.id} 
            href={item.url}
            >
                <div className="flex items-center gap-6  p-4">
                    <item.icon />
                    <p className="flex text-sm font-medium text-white">{item.title}</p>
                </div>
            </a>
        ))}
        <div className="text-white pt-2 ">
          <p className="text-sm p-2">Your Shortcut</p>
          <div className="flex gap-3 p-3 font-medium">
            <Rcb />
            <p className="text-sm">RCB Fanclub</p>
          </div>
          <div className="flex gap-3 p-3 font-medium">
            <Test />
            <p className="text-sm">Test Champion</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-[100%]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar;
