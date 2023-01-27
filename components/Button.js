import React from "react";

function Button({ text, onclick }) {
  return (
    <div>
      <div className="cstmButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button
        style={{border:'none', background:"none", color:"#fff"}}
          onClick={() => {
            onclick();
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default Button;
