import React, { useReducer } from "react";

const Conter3 = () => {
  // reducerの関数を定義する。
  // stateとactionを引数に渡して、stateを更新する関数。
  const reducerFunction = (state, action) => {
    // actionのタイプによるstateの更新処理を記述する。
    switch (action.type) {
      case "increment":
        console.log(action.payload)
        return state + 1;
      case "decrement":
        console.log(action.payload)
        return state - 1;
      case "reset":
        console.log(action.payload)
        return 0;
      default:
        return state;
    }
  };

  // useReducerの引数にreducerの関数とステートの初期値を渡す。
  // dispatchの引数がaction
  const [counter, dispatch] = useReducer(reducerFunction, 0);
  return (
    <>
      <p>カウント：{counter}</p>
      <button onClick={() => dispatch({ type: "increment", payload: "APIの返り値など入れる(increment)" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement", payload: "APIの返り値など入れる(decrement)" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset", payload: "APIの返り値など入れる(reset)" })}>RESET</button>
      <div className="line"></div>
    </>
  );
};

export default Conter3;
