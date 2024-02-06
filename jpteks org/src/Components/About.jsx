import React from "react";
import HeadingSection from "./HeadingSection";
import Data from "../assets/Data";

const About = () => {
  return (
    <div className=" py-5 md:px-40 sm:px-20 px-8" id="ABOUT US">
      <HeadingSection title={Data.heading[0]}/>
      {Data.about.map(item=>(
        <p className="max-w-[500px] md:text-2xl text-base text-gray-400 leading-normal mt-20 font-mono">
        {item}
      </p>
      ))}
      
    </div>
  );
};

export default About;
