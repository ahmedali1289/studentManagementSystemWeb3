import React from "react";
function Button({ text, onclick, loading }) {
  return (
    <div>
      <div className="cstmButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {loading ?
          <div className="spinner-border spinner-border-sm"></div>
          : <button
            style={{ border: 'none', background: "none", color: "#fff" }}
            onClick={() => {
              onclick();
            }}
          >
            {text}
          </button>
        }
      </div>
    </div>
  );
}

export default Button;
