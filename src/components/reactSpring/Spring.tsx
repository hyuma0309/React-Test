import { useSprings, useSpring, animated, config } from "react-spring";
import React, { useState, VFC } from "react";

const Spring: VFC = () => {
  /**
   *useSpring Hook
   */
  const [enter, setEnter] = useState(false);
  const springA = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green",
  });

  const [springB, set] = useSpring(() => ({
    fontSize: "24pt",
    color: "green",
  }));

  return (
    <>
      <animated.div
        style={springA}
        onMouseEnter={(e) => setEnter(true)}
        onMouseLeave={(e) => setEnter(false)}
      >
        Hello React Spring
      </animated.div>
      <animated.div
        style={springB}
        onMouseEnter={(e) => set({ fontSize: "48pt", color: "red" })}
        onMouseLeave={(e) => set({ fontSize: "24pt", color: "green" })}
      >
        Hello React Spring
      </animated.div>
    </>
  );
};

export default Spring;
