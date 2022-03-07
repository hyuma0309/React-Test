import React from "react";
import SampleSprings from "../components/reactSpring/SampleSprings";
import SampleTrail from "../components/reactSpring/SampleTrail";
import Spring from "../components/reactSpring/Spring";

const pageSpring: React.FC = () => {
  return (
    <div>
      <Spring />
      <SampleSprings />
      <SampleTrail />
    </div>
  );
};

export default pageSpring;
