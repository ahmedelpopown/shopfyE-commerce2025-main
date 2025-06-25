 import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks/NavLinks";
import Icons from "./Icons/Icons";
import { useState } from "react";
const Navbar = () => {
const [open,setOpen]=useState(false)



  return (
    <nav className="bg-white  top-0 left-0 sticky w-[100%] z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-[1.25rem] mdS:w-auto w-full flex justify-between ">
          <img src={logo} alt="logo" className="mdS:cursor-pointer h-9 " />
          <div className="text-3xl mdS:hidden" onClick={()=>setOpen(!open)}>
          <ion-icon name={`${open ? 'close':'menu'}`}></ion-icon>
           
          </div>
        </div>



        <ul className="mdS:flex hidden py-1   items-center   ">
         
          <NavLinks />
        </ul>



        <div className="hidden text-[18px] mdS:flex justify-center items-center   space-x-3 ">
          <Icons />
        </div>
        {/* mobile nav */}
        <ul
          className={`mdS:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
         
          <NavLinks />
          <div className="by-5 flex">
            <Icons />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
