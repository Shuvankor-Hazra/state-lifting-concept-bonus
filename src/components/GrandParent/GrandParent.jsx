import { useEffect, useState } from "react";
import Parent from "../Parent/Parent";

const GrandParent = () => {

    const[property, setProperty] = useState(100);

    const[happyFromGrandChild, setHappyFromGrandChild] = useState('');

    const dataFromGrandChild = (happy) =>{
        setHappyFromGrandChild(happy)
    }

    useEffect(() => {
        console.log(happyFromGrandChild)
    }, [happyFromGrandChild])

  return (
    <div>
      <h2>Grand Parent</h2>
      {happyFromGrandChild}
      <Parent dataFromGrandChild = {dataFromGrandChild} property = {property}></Parent>
    </div>
  );
};

export default GrandParent;
