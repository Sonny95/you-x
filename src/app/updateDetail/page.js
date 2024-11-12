import React from "react";

function UpdateDetail() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-black flex-col">
      <div className="w-full h-2/3 flex items-center justify-center text-black ">
        <div className="w-1/4 h-2/3 bg-white p-4 ">
          {/* personal detail */}
          <div className="w-full flex flex-col justify-center items-center mt-8">
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Name</div>
            <input
              type="text"
              placeholder="Mia Son"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Mobile Number</div>
            <input
              type="number"
              placeholder="60,000"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Email Address</div>
            <input
              type="text"
              placeholder="miajson95@gmail.com"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
          </div>
        </div>
        <div className="w-1/4 h-2/3 bg-white p-4  ">
          <div className="w-full flex flex-col justify-center items-center mt-8">
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Name</div>
            <input
              type="text"
              placeholder="Mia Son"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Mobile Number</div>
            <input
              type="number"
              placeholder="60,000"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Email Address</div>
            <input
              type="text"
              placeholder="miajson95@gmail.com"
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
          </div>
        </div>
      </div>
      {/* submit button */}
      <div className=" w-full flex justify-center items-center mt-8">
        <button className="= font-bold text-xl cursor-pointer m-5 w-28 h-14 rounded-xl bg-[#f39d8e] hover:bg-yellow-500 ">
          Next
        </button>
      </div>
    </div>
  );
}

export default UpdateDetail;
