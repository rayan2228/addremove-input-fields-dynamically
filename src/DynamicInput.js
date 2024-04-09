import React from 'react'
import "./addremove-input-fields-dynamically.css"
const DynamicInput = ({ length = null, cancelClassName = null, inputClassName = null, buttonClassName = null, inputAttributes = null, inputOptions, setInputOptions, containerClassName = null, itemClassName = null, buttonAttributes = null, buttonText = "add", buttonErrorCss = null, cancelIcon = null, buttonIconBefore = null, buttonIconAfter = null }) => {
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
    inputOptions.splice(index, 1);
    setInputOptions((prev) => [...prev]);
  };
  return (
    <div className={`container ${containerClassName}`}>
      {inputOptions.length > 0 &&
        inputOptions.map((inputValue, index) => (
          <div key={index} className={`item ${itemClassName}`}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className={`inputCss r ${inputClassName}`}
              {...inputAttributes}
            />
            <span
              onClick={() => handleDeleteOption(index)}
              className={`cross ${cancelClassName}`}
            >
              {
                cancelIcon !== null ?
                  <img src={cancelIcon} alt={cancelIcon} loading="lazy" />
                  :
                  "X"
              }
            </span>
          </div>
        ))}
      <button
        onClick={handleClick}
        type="button"
        className={`buttonCss  ${buttonClassName}  ${length && inputOptions.length === length && (buttonErrorCss || "error")
          } `}
        disabled={length && inputOptions.length === length ? true : false}
        {...buttonAttributes}
      >
        {buttonIconBefore !== null && (
          <img src={buttonIconBefore} alt={buttonIconBefore} loading="lazy" />
        )}
        {buttonText}
        {buttonIconAfter !== null && (
          <img src={buttonIconAfter} alt={buttonIconAfter} loading="lazy" />
        )}
      </button>
    </div>
  );
};

export default DynamicInput;
