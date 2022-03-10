import React, { FC } from 'react';
import Top from '../components/Top';


const MyApp: React.FC = () => {
  return (
    <div>
      <h1>おやです</h1>
      <Top text="下記くけこ">
        children
      </Top>
    </div>
  );
}

export default MyApp;