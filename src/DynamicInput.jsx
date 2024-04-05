import React, { useState } from "react";
const DynamicInput = () => {
  const [inputOptions, setInputOptions] = useState(["", ""]);
  const handleInputChange = (index, value) => {
    setInputOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };
  const handleClick = () => {
    if (inputOptions.length < 4) {
      setInputOptions((prevOptions) => [...prevOptions, ""]);
    }
  };
  const handleDeleteOption = (index) => {
    if (index > 1) {
      inputOptions.splice(index, 1);
      setInputOptions((prev) => [...prev]);
    }
  };
  return (
    <div>
      {inputOptions.map((inputValue, index) => (
        <div key={index}>
          <label
            htmlFor="option"
            className={`flex items-center px-3 mt-3 mb-5 border`}
          >
            <input
              type="text"
              className="w-full border-0 focus:ring-0"
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              required
            />
            <span
              className="cursor-pointer"
              onClick={() => handleDeleteOption(index)}
            >
              <RxCross2 />
            </span>
          </label>
        </div>
      ))}
      <button
        className={`flex items-center px-3 py-2 mb-2 text-left rounded gap-x-4`}
        onClick={handleClick}
        type="button"
      >
        <i className="fa-solid fa-plus"></i>
        <p className="font-medium">Add</p>
      </button>
    </div>
  );
};

export default DynamicInput;
