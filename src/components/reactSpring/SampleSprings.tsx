import React, { VFC } from "react";
import { animated, config, useSprings } from "react-spring";

const SampleSprings: VFC = () => {
  const msg = "Hello React Spring";
  const [springs, set] = useSprings(msg.length, () => ({
    fontSize: "24pt",
  }));
  return (
    <div style={{ fontSize: "24pt" }}>
      {springs.map((item, idx) => (
        <animated.span
          onMouseEnter={(e) =>
            set((i) => (i === idx ? { fontSize: "48pt" } : {}))
          }
          onMouseLeave={(e) =>
            set((i) => (i === idx ? { fontSize: "24pt" } : {}))
          }
          style={{ verticalAlign: "top", ...item }}
        >
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  );
};

export default SampleSprings;
