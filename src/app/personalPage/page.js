"use client";

import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function PersonalPge() {
  const incomeData = [
    { title: "Income", value: 56400, color: "#c3bcac" },
    { title: "Expenses", value: 35000, color: "#10332d" },
  ];
  const assetData = [
    { title: "assets", value: 150000, color: "#e7e179" },
    { title: "liabilities", value: 70000, color: "#93b6ee" },
  ];

  //pie chart income and asset percentage
  const incomeDataTotal = incomeData.reduce((acc, item) => acc + item.value, 0);
  const assetDataTotal = incomeData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full h-screen flex items-center justify-center text-black flex-col">
      <div className="w-2/3 h-2/3 flex items-center justify-center text-black ">
        <div className="w-1/2 h-full flex-col">
          {/* personal detail -1 */}
          <div className="w-full h-1/3 bg-white p-4 flex  flex-col rounded-2xl border-2 border-gray-300 m-2">
            <div className="w-full  bg-white  flex items-center justify-between mb-4">
              <div className="text-2xl text-[#f39d8e] font-bold">Detail</div>
              <button className="text-base text-gray-400 cursor-pointer">Edit</button>
            </div>
            <div>Name</div>
            <div>Mobile Number</div>
            <div>Email Address</div>
          </div>

          {/* loan detail  */}
          <div className="w-full h-2/3 bg-white p-4 flex flex-col rounded-2xl border-2 border-gray-300 m-2">
            <div className="w-full  bg-white  flex items-center justify-between mb-4">
              <div className="text-2xl text-[#f39d8e] font-bold">Loan detail</div>
              <button className="text-base text-gray-400 cursor-pointer">Edit</button>
            </div>

            <div>Loan option</div>
            <div>Applying for</div>
            <div>seek property</div>
            <div>The loan for</div>
            <div>Looking for</div>
          </div>
        </div>

        <div className="w-1/2 h-full flex-col ">
          <div className="w-full h-1/2 bg-white p-2 flex items-center flex-col justify-center rounded-2xl border-2 border-gray-300 m-4">
            <div className="w-full  bg-white  flex items-center justify-between mb-4">
              <div className="text-2xl text-[#f39d8e] font-bold">Income and Assets detail</div>
              <button className="text-base text-gray-400 cursor-pointer">Edit</button>
            </div>

            {/* income,expenses pie  */}
            <PieChart
              data={incomeData}
              lineWidth={80}
              radius={50}
              label={({ dataEntry }) => `${Math.round((dataEntry.value / incomeDataTotal) * 100)}%`} // 퍼센트 표시
              labelStyle={{
                fontSize: "10px",
                fill: "#fff",
              }}
              labelPosition={50}
            />
          </div>
          <div className="w-full h-1/2 bg-white p-4 flex items-center justify-center flex-col rounded-2xl border-2 border-gray-300 m-4">
            <div className="w-full  bg-white  flex items-center justify-between mb-4">
              <div className="text-2xl text-[#f39d8e] font-bold">Income and Assets detail</div>
              <button className="text-base text-gray-400 cursor-pointer">Edit</button>
            </div>
            {/* assets and liabilities pie */}
            <PieChart
              data={assetData}
              lineWidth={80}
              label={({ dataEntry }) => `${Math.round((dataEntry.value / assetDataTotal) * 100)}%`} // 퍼센트 표시
              labelStyle={{
                fontSize: "10px",
                fill: "#fff",
              }}
              labelPosition={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPge;
