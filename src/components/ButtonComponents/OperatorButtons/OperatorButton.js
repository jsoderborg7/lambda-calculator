import React, {useState} from "react";

const OperatorButton = (props) => {
  const {operators} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numbers}</button>
    </>
  );
};

export default OperatorButton;