import React, { FC } from 'react';
import Top from '../components/Top';
import Spring from '../components/reactSpring/Spring';


const MyApp: React.FC = () => {
  return (
    <div>
      <h1>おやです</h1>
      <Top text="下記くけこ">
        children
      </Top>
      <Spring />
    </div>
  );
}

export default MyApp;