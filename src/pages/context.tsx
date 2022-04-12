import React, { useState } from "react";
import Parent from "../components/useContext/Parent";

export const UserCount = React.createContext(null);

function Context() {
  const [count, setCount] = useState(100);
  const value = {
    count,
    setCount,
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <Parent />
      </UserCount.Provider>
    </div>
  );
}

export default Context;
