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
      { id: 2, label: "Equipment" },
      { id: 3, label: "Personal" },
      { id: 2, label: "Business" },
      { id: 3, label: "Insurance" },
    ],
    1: [
      { id: 1, title: "why are you applying?" },
      { id: 2, label: "I want to refinance my loan" },
      { id: 3, label: "I want to purchase a new property" },
    ],
    2: [
      { id: 1, title: "Have you found your property?" },
      { id: 2, label: "No, I'm still on the hunt" },
      { id: 3, label: "Yes, i've found a property" },
    ],
    3: [
      { id: 1, title: "This loan is for" },
      { id: 2, label: "It's Just me " },
      { id: 3, label: "There's two of us" },
    ],
    4: [
      { id: 1, title: "I'm looking for" },
      { id: 2, label: "A home to live in " },
      { id: 3, label: "An investment property" },
    ],
  };

  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedOption(id);
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-1/4 h-3/4">
        <div className="text-2xl w-full h-1/6 flex items-center justify-between">
          <div className="flex-grow text-center mr-8 text-[#f39d8e] font-bold">
            Discover your perfect loan{" "}
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between">
          {loans.map((name, index) => (
            <button
              key={index}
              className="cursor:point m-2 w-36 h-20 rounded-xl text-base bg-[#f39d8e] mb-4 hover:bg-yellow-500"
            >
              {name}
            </button>
          ))}
        </div>
        <div>
          <h1>버튼 선택</h1>
          <h2>현재 단계: {step}</h2>

          <div>
            {options[step].map((option) => (
              <div key={options.id} onClick={() => handleButtonClick(option.id)}>{option.title}</div>
              <button key={option.id} onClick={() => handleButtonClick(option.id)}>
                {option.label}
              </button>
            ))}
          </div>

          {selectedOption && <div>선택된 옵션 ID: {selectedOption}</div>}
        </div>
      </div>
    </div>
  );
}
