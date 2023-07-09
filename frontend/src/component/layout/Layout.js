import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AboutPage from '../../page/about/AboutPage'
import OrderPage from '../../page/order/OrderPage'
import ProductPage from '../../page/product/ProductPage'
import UserPage from '../../page/user/UserPage'
import SalesPage from '../../page/sales/SalesPage'
import AccountPage from '../../page/account/AccountPage'
import { useEffect, useState } from "react";

// close open Sidebar
const getWidth = () => {
   return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
}

 function useCurrentWidth (){
   let [width,setWidth] = useState(getWidth);
   useEffect(()=>{
      let timeOutId = null;
      const resizeListstenner = ()=>{
         clearTimeout(timeOutId);
         timeOutId = setTimeout(()=> setWidth(getWidth()),150);
      }
      window.addEventListener("resize", resizeListstenner);
      return ()=> {
         window.removeEventListener("resize",resizeListstenner);
      }
   },[]);
   return width;
 }

 function Layout (){
   
   const [toggleSidebar,setToggleSidebar] = useState(false);
   let width =useCurrentWidth();
  useEffect(()=>{
      if(width > 1024){
        setToggleSidebar(true);
      }
      if(width < 1024){
        setToggleSidebar(false);
      }
  },[width]);

    return (
        <div className="flex overflow-hidden h-screen ">
           <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/> 
           <div className="w-full">
           <Navbar setToggleSidebar={setToggleSidebar}/>
              <div>
                <Routes>
                  
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/order" element={<OrderPage/>} />
                    <Route path="/sales" element={<SalesPage/>} />
                    <Route path="/product" element={<ProductPage/>} />
                    <Route path="/user" element={<UserPage/>} />
                    <Route path="/accout" element={<AccountPage/>} />

                    <Route path="*" element={<h1>RouteNot fond</h1>}/>
                </Routes>
              </div>
           </div>
        </div>
    )
 }
 export default Layout;