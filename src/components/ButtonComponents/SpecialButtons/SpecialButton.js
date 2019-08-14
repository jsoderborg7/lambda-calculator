import React, {useState} from "react";

const SpecialButton = (props) => {
  const {specials} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specButtons">{props.specials}</button>
    </>
  );
};

export default SpecialButton;