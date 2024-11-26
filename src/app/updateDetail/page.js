"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

function UpdateDetail() {
  // data tate
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [assets, setAssets] = useState("");
  const [liabilities, setLiabilities] = useState("");

  //send personal data
  const submitButton = () => {
    axios
      .post("http://localhost:8000/api/saveDetail", {
        name,
        mobileNumber,
        email,
        income,
        expenses,
        assets,
        liabilities,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error saving data", error);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-black flex-col">
      <div className="w-full h-2/3 flex items-center justify-center text-black ">
        <div className="w-1/4 h-2/3 bg-white p-4 ">
          {/* 1.personal detail  */}
          <div className="w-full flex flex-col justify-center items-center mt-8">
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Name</div>
            <input
              type="text"
              placeholder="Mia Son"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Mobile Number</div>
            <input
              type="number"
              placeholder="60,000"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-4">Email Address</div>
            <input
              type="text"
              placeholder="miajson95@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-8 text-black"
            />
          </div>
        </div>
        {/* 2.personal detail  */}
        <div className="w-1/4 h-2/3 bg-white p-4  ">
          <div className="w-full flex flex-col justify-center items-center mt-8">
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-2">My Income</div>
            <input
              type="number"
              placeholder="Mia Son"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-4 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-2">
              Bills & Living Expenses
            </div>
            <input
              type="number"
              placeholder="60,000"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-4 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-2">Assets</div>
            <input
              type="number"
              placeholder="20,000"
              value={assets}
              onChange={(e) => setAssets(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-4 text-black"
            />
            <div className="text-2xl text-center text-[#f39d8e] font-bold mb-2">Liabilities</div>
            <input
              type="number"
              placeholder="100,000"
              value={liabilities}
              onChange={(e) => setLiabilities(e.target.value)}
              className="w-2/3 p-2 rounded-md border border-[#f39d8e] mb-4 text-black"
            />
          </div>
        </div>
      </div>
      {/* submit button */}
      <div className=" w-full flex justify-center items-center mt-8">
        <Link href={"/personalPage"}>
          <button
            onClick={submitButton}
            className="text-white font-bold text-xl cursor-pointer m-5 w-40 h-14 rounded-xl bg-[#f39d8e] hover:bg-yellow-500 "
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpdateDetail;
