"use client"
// components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value:any) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };
  
  const removeDigit=()=>{
    if(input.length>0){
      setInput(input.slice(0 ,-1))
    }
  }

  return (
    <div className="">
      <input
        type="text"
        value={input}
        className="w-full p-2 text-xl mb-4 text-left   outline-dashed outline-red-500 rounded-full"
        readOnly
      />
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 ">
        {['7', '8', '9', '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-red-500 hover:bg-red-600 text-lg text-white rounded-full h-12 w-12 text-center"
          >
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-red-500 hover:bg-red-600 text-lg text-white rounded-full h-12 w-12 text-center"
          >
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-red-500 hover:bg-red-600 text-lg text-white rounded-full h-12 w-12 text-center"
          >
            {value}
          </button> 
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={() =>
              value === '=' ? handleCalculate() : handleButtonClick(value)
            }
            className="p-2 bg-red-500 hover:bg-red-600 text-lg text-white rounded-full h-12 w-12  text-center"
          >
            {value}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-2 md:col-span-1 p-2 bg-green-500 hover:bg-green-600 text-white text-lg rounded-full h-12 w-12 text-center"
        >
          C
        </button>
        <button onClick={removeDigit}
        className="col-span-2 md:col-span-1 p-2 bg-yellow-500 hover:bg-yellow-600 text-white text-lg rounded-full h-12 w-12 text-center"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Calculator;
