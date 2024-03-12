import Child from "../Child/Child";

const Parent = ({property, dataFromGrandChild}) => {
  return (
    <div>
      <h2>Parent</h2>
      <Child dataFromGrandChild = {dataFromGrandChild} property = {property}></Child>
    </div>
  );
};

export default Parent;
