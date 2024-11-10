"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // loan options
  // const loans = ["Home ", "Car", "Equipment", "Personal", "Business", "Insurance"];
  // loan choose options
  const options = {
    1: [
      { id: 1, title: "Discover your perfect loan" },
      { id: 2, label: "Home" },
      { id: 3, label: "Car" },
      { id: 4, label: "Equipment" },
      { id: 5, label: "Personal" },
      { id: 6, label: "Business" },
      { id: 7, label: "Insurance" },
    ],
    2: [
      { id: 1, title: "why are you applying?" },
      { id: 2, label: "I want to refinance my loan" },
      { id: 3, label: "I want to purchase a new property" },
    ],
    3: [
      { id: 1, title: "Have you found your property?" },
      { id: 2, label: "No, I'm still on the hunt" },
      { id: 3, label: "Yes, i've found a property" },
    ],
    4: [
      { id: 1, title: "This loan is for" },
      { id: 2, label: "It's Just me " },
      { id: 3, label: "There's two of us" },
    ],
    5: [
      { id: 1, title: "I'm looking for" },
      { id: 2, label: "A home to live in " },
      { id: 3, label: "An investment property" },
    ],
  };

  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedOption(id);
    if (step < 6) {
      setStep(step + 1);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 h-2/3 bg-white p-4">
        {/* Title Section */}
        <div className="w-full flex justify-center items-center mb-4">
          {options[step].map((option) =>
            option.title ? (
              <div key={option.id} className="text-2xl text-center text-[#f39d8e] font-bold">
                {option.title}
              </div>
            ) : null
          )}
        </div>

        {/* Button Section */}
        <div className="w-full flex flex-wrap justify-start">
          {options[step].map((option) =>
            option.label ? (
              <button
                key={option.id}
                className="font-bold text-xl cursor-pointer m-5 w-2/5 h-20 rounded-xl bg-[#f39d8e] mb-4 hover:bg-yellow-500"
                onClick={() => handleButtonClick(option.id)}
              >
                {option.label}
              </button>
            ) : null
          )}
        </div>

        <div className="w-full flex justify-center items-center mb-4">
          <div className="text-2xl text-center text-[#f39d8e] font-bold">
            Expecting Property Price
          </div>
          <input placeholder="600,000" className="w-"></input>
          <div className="text-2xl text-center text-[#f39d8e] font-bold">Your deposit price</div>
          <input placeholder="60,000" className="w-"></input>
        </div>
      </div>
    </div>
  );
}
