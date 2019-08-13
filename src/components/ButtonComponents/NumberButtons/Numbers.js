import React, {useState} from "react";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log('numbers', { numberState});

  return (
    <div>
      {numberState.map((number, index) => ( <NumberButton numbers={number} key={index}/>
      ))}
    </div>
  );
};

export default Numbers;