import React from "react";

function InputFeilds({ label, labelColor, placeholder, labelFontSize, setState, state }) {
  return (
    <div className="d-flex flex-column w-50 marginHorizontalAuto">
      <div className="inputContainer">
      <label className="formInputLabels" style={{color:labelColor, fontSize:labelFontSize}}>{label}</label>
      <input
        className="formInputFields w-100"
        placeholder={placeholder}
        value={state}
        onChange={(e) => {
          setState(e?.target?.value);
        }}
      />
      </div>
    </div>
  );
}

export default InputFeilds;
