import React from "react";
import Design from "./design";

const Header = () => {
  return (
    <div className="bg-[url(./assets/images/background.png)] md:px-10 px-4 py-14 bg-cover bg-no-repeat flex-1 flex" id="HOME">
      <div className=" bg-[url(./assets/images/smmback.png)] bg-cover md:px-20 px-10 flex-1 flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
          <Design/>
        </div>
        
        <div className="z-10">
          <h1 className=" text-white leading-snug lg:text-5xl md:text-3xl text-2xl font-semibold ">
            JPTEKS Something <br /> Something{" "}
            <span className=" text-orange-300">OF</span> Something{" "}
          </h1>

          <button className=" bg-orange-300 px-6 py-2 rounded-md lg:mt-16 mt-7 font-semibold active:scale-95 ">
            Contact Us
          </button>
        </div>
        <div className=" absolute -bottom-2 bg-neutral-900 px-10 py-4 text-gray-500 font-semibold rounded-md left-[50%] translate-x-[-50%] whitespace-nowrap ">
          <p>IMPACT-INNOVATE-GROW</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
