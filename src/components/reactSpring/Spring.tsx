import React, { useState, VFC } from "react";
import { animated, useSpring, to } from "react-spring";

const Spring: VFC = () => {
  /**
   *useSpring Hook
   */
  const [enter, setEnter] = useState(false);
  const springA = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green",
  });

  const [springB, setSpring] = useSpring(() => ({
    fontSize: "24pt",
    color: "green",
  }));

  const [tests, setTest] = useSpring(() => ({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
    delay: 500,
    onRest: () => console.log("終わりました"),
  }));

  const { o, color } = useSpring({
    o: 10,
    color: 'green',
  })

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
        onMouseEnter={(e) => setSpring({ fontSize: "48pt", color: "red" })}
        onMouseLeave={(e) => setSpring({ fontSize: "24pt", color: "green" })}
      >
        Hello React Spring
      </animated.div>
      <animated.div
        style={{
          fontSize: "24pt",
          color: "blue",
          border: to([o, color], (o, c) => `${o * 10}px solid ${c}`),
          ...tests,
        }}
        onMouseEnter={(e) => setTest({ from: { x: 500 } })}
      >
        Hello Test Spring
      </animated.div>
    </>
  );
};

export default Spring;
