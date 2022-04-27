import React, { useRef, useState, VFC } from "react";
import optimized from "/Users/asadahyuuma/code/React-Test/dist/optimized_sample1.jpg";


// hooksでまとめるとこれらを使いたいファイルごとに呼ばなくて済む
// import { useSelector, useDispatch } from "react-redux";
// import { decrease, increase } from "../store/count/counterSlice";
import { useStore } from "../hooks/useStore";

export interface TopProps {
  text?: string;
  children?: React.ReactNode;
}

const doSomething = () => {
  alert("sample");
};

const Top: VFC<TopProps> = (props) => {
  const [testText, setText] = useState("stateです");
  const textRef = useRef(null);

  // redux toolkit
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  //hooksにまとめてみた
  const { state, dispatch, actions } = useStore();

  console.log("レンダリング");

  const handleChange = (e) => {
    setText(() => e.target.value);
  };
  return (
    <>
      <div>
        <h1>{props.text}</h1>
        <h1>{props.children}</h1>
        <h1>こんにちは</h1>
      </div>
      <button onClick={doSomething}>ボタンです</button>
      <button onClick={doSomething}>ボタンです</button>
      <div>
        <input onChange={handleChange} type="text"></input>
      </div>
      <div>
        <input ref={textRef} type="text" />
        {/* refを使うと無駄なレンダリングがされない。 */}
        <button onClick={() => alert(textRef.current.value)}>値の確認</button>
      </div>
      {/* stateはcomputedのように使える */}
      <p>{testText}</p>
      {/* redux toolkit */}
      {/* <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button> */}

      {/* hooksにまとめてみた */}
      <h1>Count: {state.counter.count}</h1>
      <button onClick={() => dispatch(actions.count.increase())}>Up</button>
      <button onClick={() => dispatch(actions.count.decrease())}>Down</button>

      {/* 画像 */}
      <div>
        <img src="images/sample1.jpg" />
      </div>
      {/* 圧縮画像 */}
      <div>
        <img src={optimized.src} />
      </div>
    </>
  );
};

export default Top;
