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
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              required
            />
            <span
              onClick={() => handleDeleteOption(index)}
            >
              X
            </span>
          </label>
        </div>
      ))}
      <button
        onClick={handleClick}
        type="button"
      >
        +
        <p>Add</p>
      </button>
    </div>
  );
};

export default DynamicInput;
