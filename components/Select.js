import React, { createRef } from "react";
import Select from "react-select";
function SelectComponent({ options, setCourses, type }) {
  const wrapper = createRef();
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "none" }),
    placeholder: (styles) => ({ ...styles, color: "white" }),
    singleValue: (styles) => ({ ...styles, color: "white" }),
  };
  return (
    <Select
      ref={wrapper}
      classNamePrefix="select"
      closeMenuOnSelect={true}
      options={options}
      styles={colourStyles}
      onChange={(e) => {
        setCourses(type == 'grades' || type == 'attendance' ? options.indexOf(e) :e);
      }}
    />
  );
}

export default SelectComponent;
