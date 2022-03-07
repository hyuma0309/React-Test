import React, { VFC } from 'react';
import Image from './ImageComponent/Image';
import plant from '/Users/asadahyuma/code/React-Markdown/src/public/plant.png';
import plant2 from '/Users/asadahyuma/code/React-Markdown/src/public/plant2.png';

export interface TopProps {
  text?: string;
  children?: React.ReactNode;
}

const doSomething = () =>{
  alert("sample");
}

const images = [
    { id: 1, imageName: plant.src, name: 'ひまわり' },
    { id: 2, imageName: plant2.src, name: '観葉植物' },
  ];

const Top: VFC<TopProps> = (props) => {
  return (
    <>
    <div>
      <h1>{props.text}</h1>
      <h1>{props.children}</h1>
      <h1>こんにちは</h1>
    </div>
    <button onClick={doSomething}>ボタンです</button>
    <button onClick={doSomething}>ボタンです</button>
    <Image images={images}/>
    </>
  );
};

export default Top;