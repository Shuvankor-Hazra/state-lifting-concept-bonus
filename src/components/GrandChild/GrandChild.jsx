import { useState } from "react";

const GrandChild = ({ property, dataFromGrandChild }) => {

  const [happy, setHappy] = useState('Stayyyyy Happyyyyy......!');

  return (
    <div>
      <h2>Grand Child</h2>

      {property} <br /> <br />

      <button onClick={() => dataFromGrandChild(happy)}>Be Happy</button>
    </div>
  );
};

export default GrandChild;
