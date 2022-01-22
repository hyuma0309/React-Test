import React, { VFC } from 'react';
import MyApp from '../pages/app';

export interface IndexProps {
  text?: string;
}

const doSomething = () =>{
  alert("sample");
}

const Index: VFC<IndexProps> = ({ text }) => {
  return (
    <>
    <div>
      <h1>{text}</h1>
      <MyApp>Good Afternoon!</MyApp>
      <h1>こんにちは</h1>
    </div>
    <button onClick={doSomething}>ボタンです</button>
    </>
  );
};

export default Index;