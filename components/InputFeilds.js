import React from "react";

function InputFeilds({ label, labelColor, placeholder, labelFontSize, setState, state, containerWidth, type }) {
  return (
    <div className={`${containerWidth} d-flex flex-column marginHorizontalAuto`}>
      <div className="inputContainer">
      <label className="formInputLabels" style={{color:labelColor, fontSize:labelFontSize}}>{label}</label>
      <input
      type={type}
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
