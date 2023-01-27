import React from "react";

function Heading({ heading, color, size, alignment }) {
  return (
    <div>
      <h1 style={{color:color, fontSize:size, textAlign:alignment}}>{heading}</h1>
    </div>
  );
}

export default Heading;
