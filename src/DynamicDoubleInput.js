import React from 'react'
import "./addremove-input-fields-dynamically.css"
const DynamicDoubleInput = ({ length = 0, cancelClassName = null, inputClassName = null, buttonClassName = null, inputAttributes = {}, inputOptions, setInputOptions, containerClassName = null, itemClassName = null, buttonAttributes = {}, buttonText = "add", buttonErrorClassName = null, cancelIcon = null, buttonIconBefore = null, buttonIconAfter = null, inputAttributesTwo = {} }) => {
  const handleInputChange = (index, field, event) => {
    const newInputs = [...inputOptions];
    newInputs[index][field] = event.target.value;
    setInputOptions(newInputs);
  };
  const handleAddInput = () => {
    if (length) {
      if (inputOptions.length < length) {
        const newId = inputOptions.length + 1;
        setInputOptions([
          ...inputOptions,
          { id: newId, value1: "", value2: "" },
        ]);
      }
    } else {
      const newId = inputOptions.length + 1;
      setInputOptions([...inputOptions, { id: newId, value1: "", value2: "" }]);
    }
  };
  const handleDeleteOption = (index) => {
    const newInputs = [...inputOptions];
    newInputs.splice(index, 1);
    setInputOptions(newInputs);
  };
  return (
    <div className={`containerCss2 ${containerClassName}`}>
      {inputOptions.length > 0 &&
        inputOptions.map((inputValue, index) => (
          <div key={index} className={`itemCss2 ${itemClassName}`}>
            <input
              type="text"
              value={inputValue.value1}
              onChange={(event) => handleInputChange(index, "value1", event)}
              className={`inputCss2  ${inputClassName}`}
              {...inputAttributes}
            />
            <input
              type="text"
              value={inputValue.value2}
              onChange={(event) => handleInputChange(index, "value2", event)}
              className={`inputCss2  ${inputClassName}`}
              {...inputAttributesTwo}
            />
            <span
              onClick={() => handleDeleteOption(index)}
              className={`crossCss2 ${cancelClassName}`}
            >
              <img src={cancelIcon} alt={cancelIcon} loading="lazy" />
            </span>
          </div>
        ))}
      <button
        onClick={handleClick}
        type="button"
        className={`buttonCss2  ${buttonClassName}  ${length && inputOptions.length === length && (buttonErrorClassName || "errorCss2")
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

export default DynamicDoubleInput;
