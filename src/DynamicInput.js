const DynamicInput = ({ length, cancelClassName, inputClassName, buttonClassName, inputAttributes }) => {
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
    <>
      {inputOptions.map((inputValue, index) => (
        <div key={index}>
          <label
            htmlFor="option"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className={inputClassName}
              {...inputAttributes}
            />
            <span
              onClick={() => handleDeleteOption(index)}
              className={cancelClassName}
            >
              X
            </span>
          </label>
        </div>
      ))}
      <button
        onClick={handleClick}
        type="button"
        className={buttonClassName}
      >
        add
      </button>
    </>
  );
};

export default DynamicInput;
