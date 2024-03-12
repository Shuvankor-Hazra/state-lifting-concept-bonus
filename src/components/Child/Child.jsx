import GrandChild from "../GrandChild/GrandChild";

const Child = ({property, dataFromGrandChild}) => {
  return (
    <div>
      <h2>Child</h2>
      <GrandChild dataFromGrandChild ={dataFromGrandChild} property = {property}></GrandChild>
    </div>
  );
};

export default Child;
