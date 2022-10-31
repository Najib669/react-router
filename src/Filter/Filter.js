import React from "react";


const FilterByTitle = ({ inputText, setInputText }) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
        type="text"
        value={inputText}
        onChange={handleChange}
        className="inputFilter"
        placeholder="Enter movie title ..."
    </div>
  );
};

export default FilterByTitle;
