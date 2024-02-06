import React from "react";

const Activities = () => {
  return (
    <div className="sm:max-w-[85%] mx-auto " id="ACTIVITIES">
      <p className="text-white text-2xl ml-10">Activities</p>

      <div className="bg-black rounded-t-full md:mt-40 mt-24 p-5">
        <div className="flex justify-center items-center gap-6 -translate-y-16 flex-wrap">
          {/*  */}
          <div className=" bg-neutral-600 p-8 rounded-tl-3xl rounded-br-3xl w-[300px]">
            <div className="flex gap-4 items-center ">
              <i class="fas fa-check-double"></i>
              <p className=" text-white">TUTORING</p>
            </div>
            <div className="bg-yellow-400 h-[1px] max-w-[100px] mt-1"></div>
            <p className=" text-gray-400 mt-4 font-mono">
              We offer bootcamps and tutoring in the following IT domains.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>

              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" bg-neutral-600 p-8 rounded-tl-3xl rounded-br-3xl w-[300px]">
            <div className="flex gap-4 items-center ">
              <i class="fas fa-check-double"></i>
              <p className=" text-white">TUTORING</p>
            </div>
            <div className="bg-yellow-400 h-[1px] max-w-[100px] mt-1"></div>
            <p className=" text-gray-400 mt-4 font-mono">
              We offer bootcamps and tutoring in the following IT domains.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>

              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" bg-neutral-600 p-8 rounded-tl-3xl rounded-br-3xl w-[300px]">
            <div className="flex gap-4 items-center ">
              <i class="fas fa-check-double"></i>
              <p className=" text-white">TUTORING</p>
            </div>
            <div className="bg-yellow-400 h-[1px] max-w-[100px] mt-1"></div>
            <p className=" text-gray-400 mt-4 font-mono">
              We offer bootcamps and tutoring in the following IT domains.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>

              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
              <div className="flex items-center gap-3 md:text-lg text-base my-2">
                <i class="fas fa-check-circle text-gray-500"></i>
                <p className="font-mono text-white">Web Development</p>
              </div>
            </div>
          </div>
        </div>
        <button className="text-white border-white border rounded-3xl py-2 px-6 ml-auto flex mr-7 active:scale-95">
          BOOK A SERVICE
        </button>
      </div>
      <div className="md:flex justify-end items-center gap-5 text-white pt-4">
      <i className="fa fa-phone text-gray-400"></i>

        <p>Tell: 651-118-070 , 698-091-792</p>
        <i className="fa fa-location text-gray-400"></i>
        <p>Douala,Cameroon</p>
      </div>
    </div>
  );
};

export default Activities;
