import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import specials from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  console.log('specials', {specialState});
  return (
    <div>
      {specialState.map((special, index) => (
        <SpecialButton specials={special} key={index}
      />
      ))}
    </div>
  );
};
