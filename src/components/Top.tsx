import React, { useRef, useState, VFC } from "react";

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
    </>
  );
};

export default Top;
