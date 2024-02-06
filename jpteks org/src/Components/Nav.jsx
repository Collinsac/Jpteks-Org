import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import english from "../assets/icons/english.png";
import french from "../assets/icons/french.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";

import Data from "../assets/Data";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  const [display, setdisplay] = useState(false)
  window.addEventListener("resize", ()=>window.innerWidth>=1024?setdisplay(true):setdisplay(false))
  window.addEventListener("load",()=>window.innerWidth>=1024? setdisplay(true):setdisplay(false))
  
  return (
    <div className="py-4 px-10 flex items-center justify-center  border-b border-gray-500 z-50">
      <div className=" lg:max-w-[250px]  flex-1">
        <img src={Logo} alt="logo" className=" w-14" />
      </div>
      <div style={display?{display:"flex"}:{display:"none"}} className="flex-1 items-center lg:flex-row flex-col lg:bg-transparent  bg-slate-900 lg:static fixed right-0 bottom-0 top-0 p-16 lg:p-0 ">
        <i className=" fas fa-close text-gray-300 lg:hidden text-xl absolute top-5 left-5 cursor-pointer"  onClick={()=>setdisplay(false)}></i>

        <div className=" flex-1 flex justify-center gap-10 font-semibold lg:flex-row flex-col items-center">
          {Data.menu.map((item) => (
            <a href={"/#"+item} className=" text-gray-400 cursor-pointer" key={item} onClick={()=>setdisplay(false)}>
              {item}
            </a>
          ))}
        </div>
        <div className="">
          <div className="flex gap-4 justify-end">
            <img src={english} alt="" className=" w-5" />
            <img src={french} alt="" className=" w-5" />
            <img src={facebook} alt="facebook logo" className=" w-5" />
            <img src={linkedin} alt="linkedin logo" className=" w-5" />
            <img src={instagram} alt="intagram logo" className=" w-5" />
          </div>
          <div className="flex items-center  gap-2">
            <i className="fas fa-envelope mt-2.5 text-gray-700"></i>
            <p className=" text-gray-400 font-semibold text-xs mt-2 font-serif ">
              jpteks728@gmail.com
            </p>
          </div>
        </div>
      </div>
      <i className=" fas fa-hamburger text-gray-300 lg:hidden" onClick={()=>setdisplay(true)}></i>
    </div>
  );
};

export default Nav;
