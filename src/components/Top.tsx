import React, { useRef, useState, VFC } from "react";
import plant from "/Users/asadahyuma/code/React-Markdown/src/public/plant.png";
import plant2 from "/Users/asadahyuma/code/React-Markdown/src/public/plant2.png";

export interface TopProps {
  text?: string;
  children?: React.ReactNode;
}

const doSomething = () => {
  alert("sample");
};

const images = [
  { id: 1, imageName: plant.src, name: "ひまわり" },
  { id: 2, imageName: plant2.src, name: "観葉植物" },
];

const Top: VFC<TopProps> = (props) => {
  const [testText, setText] = useState("");
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
        <input value={testText} onChange={handleChange} type="text"></input>
      </div>
      <div>
        <input ref={textRef} type="text" />
        {/* refを使うと無駄なレンダリングがされない。 */}
        <button onClick={() => alert(textRef.current.value)}>値の確認</button>
      </div>
      {/* computedのように使える */}
      <p>{testText}</p>
      {/* <Image images={images} /> */}
    </>
  );
};

export default Top;
