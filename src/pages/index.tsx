import React, { FC } from 'react';

export interface IndexProps {
  text?: string;
}
const Index: FC<IndexProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <h1>こんにちは</h1>
    </div>
  );
};

export default Index;
