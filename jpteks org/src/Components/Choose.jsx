import React from "react";
import HeadingSection from "./HeadingSection";
import Data from "../assets/Data";

const Choose = () => {
  return (
    <div className="py-5">
      <HeadingSection title={Data.heading[1]} />
      <div className=" pt-10 text-gray-400 mx-auto max-w-[85%]">
        {Data.choose.map((item) => (
          <div className="flex items-center gap-5 md:text-2xl text-base my-4">
            <i class="fas fa-check-circle"></i>
            <p className="font-mono">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
