import React, {useState} from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="opButtons">{props.operators.char}</button>
    </>
  );
};

export default OperatorButton;