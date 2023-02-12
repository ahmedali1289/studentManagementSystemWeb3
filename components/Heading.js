import React from "react";

function Heading({ heading, color, size, alignment }) {
  return (
      <h1 style={{color:color, fontSize:size, textAlign:alignment}}>{heading}</h1>
  );
}

export default Heading;
