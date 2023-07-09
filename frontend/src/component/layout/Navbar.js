import React from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'

function Navbar ({setToggleSidebar}){
    return (
        <div className="h-[4rem] top-0 flex justify-between items-center px-2 lg:px-4 bg-slate-300 ">
           <div className='flex items-center p-4 ' >
              <AiOutlineMenuFold className='text-xl lg:text-2xl cursor-pointer ' onClick={()=>{
                setToggleSidebar(true);
              }}/>
              <h1 className='font-bold text-lg lg-text-3xl ml-2 lg-ml-4 p-4 '>ផ្ទាំងព័ត៌មាន</h1>
           </div> 
           <div className='flex items-center'>
              <div className='mr-4'>
                <h1 className='font-semibold text-md lg:text-lg'>kimla chhoeurn</h1>
                <p className='text-slate-500'>Admin</p>
              </div>
              <img src='https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-2.jpg' className='rounded-full object-cover w-8 h-8 lg:w-12 lg:h-12'/>
           </div>
        </div>
    )
}
export default Navbar;