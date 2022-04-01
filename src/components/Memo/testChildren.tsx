import React, { memo, VFC } from "react";

export interface Props {
  text: string;
}

const TestChildren: VFC<Props> = memo(({ text }) => {
  console.log("子コンポーネント-レンダリングされました");
  return <div>{text}</div>;
});

export default TestChildren;
