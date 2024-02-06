import React from "react";

const HeadingSection = (props) => {
  return (
    <div className="flex justify-center items-center text-white font-semibold text-xl gap-4">
      <div className="bg-yellow-400 min-w-[100px] h-[1px]"></div>
      <p>{props.title}</p>
      <div className="bg-yellow-400 min-w-[100px] h-[1px]"></div>
    </div>
  );
};

export default HeadingSection;
