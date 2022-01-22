import React, { FC } from 'react';
import Index from '../components/index';

const MyApp: React.FC = ({ children }) => {
  return (
    <div>
      <h1>おやです</h1>
      <Index text="下記くけこ"/>
      {children}
    </div>
  );
}

export default MyApp;