import React from 'react'
import { Link } from 'react-router-dom'
import { LuLayoutDashboard } from 'react-icons/lu'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdLibraryAdd } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaUserTie } from 'react-icons/fa'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'




function Sidebar({toggleSidebar,setToggleSidebar}) {

    const navigate = useNavigate()

  const onClickMenu =(routeName)=>{
     navigate(routeName)
  }

    const menus = [
        {
            name: "ផ្ទាំងព័ត៌មាន",
            url: "/about",
            icon: <LuLayoutDashboard className='text-xl ' />
        },
        {
            name: "ការបញ្ជារទិញ",
            url: "/order",
            icon: <TbDeviceDesktopAnalytics className='text-xl ' />
        },
        {
            name: "ការលក់",
            url: "/sales",
            icon: <AiOutlineShoppingCart className='text-xl ' />
        },
        {
            name: "ផលិតផល",
            url: "/product",
            icon: <MdLibraryAdd className='text-xl ' />
        },
        {
            name: "អ្នកប្រើប្រាស់",
            url: "/user",
            icon: <FiUsers className='text-xl ' />
        },
        {
            name: "គណនី",
            url: "/account",
            icon: <FaUserTie className='text-xl ' />
        },
    ]

    return (
        <div className={`${!toggleSidebar && "-translate-x-[20rem]"}  shadow-lg w-[20rem] md:w-[20rem] z-50 bg-slate-100 h-screen left-0 top-0 fixed transition ease-in-out duration-500 overflow-hidden lg:static`}>
            <div className="h-[4rem] flex justify-between items-center px-5 bg-slate-300">
                <img src='https://smartpossoftware.com/assets/images/logo/smart-pos-software-logo.png' className='w-40' onClick={()=>onClickMenu("/")} />
                <AiOutlineMenuUnfold className='text-2xl cursor-pointer lg:hidden'onClick={()=>{
                setToggleSidebar(false);
              }}/>
            </div>
            <hr />
            <div className="h-full ">
                {
                    menus.map((menu, index) => (
                        <Link to={menu.url}>
                            <div className='h-14 flex items-center text-black p-4 cursor-pointer hover:bg-white hover:text-blue-600'>
                                {
                                    menu.icon
                                }
                                <h1 className='text-xl ml-4'>{menu.name}</h1>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}
export default Sidebar;