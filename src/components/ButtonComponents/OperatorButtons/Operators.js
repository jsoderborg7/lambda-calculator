import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  console.log('operators', {operatorState});
  return (
    <div>
      {operatorState.map((operator, index) => (
        <OperatorButton operator={operators} key={index} 
        />
      ))}
    </div>
  );
};

export default Operators;