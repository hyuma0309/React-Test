import React, { VFC, useState } from "react";
import { animated, config, useTrail } from "react-spring";

const SampleTrail = () => {
  const msg = "Hello React Spring";
  const [{ x, y }, setXY] = useState({ x: 500, y: 500 });
  const trails = useTrail(msg.length, {
    //    config: config.wobbly,
    config: config.gentle,
    left: `${x}px`,
    top: `${y}px`,
    position: "absolute",
  });
  return (
    <div
      style={{ width: "100%", height: 1000, fontSize: "24pt" }}
      onMouseMove={(e) => {
        e.persist();
        setXY({ x: e.clientX, y: e.clientY });
      }}
    >
      {trails.map((trail, idx) => (
        <animated.span style={{ ...trail, paddingLeft: idx * 23 }}>
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  );
};

export default SampleTrail;
