import React, { useContext } from "react";
import { UserCount } from "../../pages/context";

const Grandchild = () => {
  const { count, setCount } = useContext(UserCount);
  return (
    <div>
      <p>Componet C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Grandchild;
