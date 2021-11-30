import React from "react";

const Display = ({ counter, text }) => {
  return (
    <div>
      <span>{text}:</span>
      {counter}
    </div>
  );
};

export default Display;
