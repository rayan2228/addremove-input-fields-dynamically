import { useState } from "react";
import "./index.css"
const DynamicInput = ({ length, cancelClassName, inputClassName, buttonClassName, inputAttributes, inputOptions, setInputOptions, containerClassName, itemClassName, buttonAttributes, buttonText = "add", buttonError = null }) => {
  const handleInputChange = (index, value) => {
    setInputOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };
  const handleClick = () => {
    if (length) {
      if (inputOptions.length < length) {
        setInputOptions((prevOptions) => [...prevOptions, ""]);
      }
    } else {
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
    <div className={`container ${containerClassName}`}>
      {inputOptions.map((inputValue, index) => (
        <div key={index} className={`item ${itemClassName}`}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className={`inputCss ${inputClassName}`}
            {...inputAttributes}
          />
          <span
            onClick={() => handleDeleteOption(index)}
            className={`cross ${cancelClassName}`}
          >
            X
          </span>
        </div>
      ))}
      <button
        onClick={handleClick}
        type="button"
        className={`buttonCss ${buttonClassName} ${(length && length > inputOptions.length) && ${buttonError ?? 'error'}}`}
      {...buttonAttributes}
      >
      {buttonText}
    </button>
    </div >
  );
};

export default DynamicInput;
