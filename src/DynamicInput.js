import React from 'react'
import "./addremove-input-fields-dynamically.css"
const DynamicInput = ({ length = null, cancelClassName = null, inputClassName = null, buttonClassName = null, inputAttributes = null, inputOptions, setInputOptions, containerClassName = null, itemClassName = null, buttonAttributes = null, buttonText = "add", buttonError = null }) => {
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
    if (index) {
      inputOptions.splice(index, 1);
      setInputOptions((prev) => [...prev]);
    }
  };
  return (
    <div className={`container ${containerClassName}`}>
      {inputOptions.length && inputOptions.map((inputValue, index) => (
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
        className={`buttonCss ${buttonClassName} ${(length && (inputOptions.length === length)) && "error"} `}
        disabled={(length && (inputOptions.length === length)) ? true : false}
        {...buttonAttributes}
      >
        {buttonText}
      </button>
    </div >
  );
};

export default DynamicInput;
