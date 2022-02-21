import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const Algo2 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(100);
  };

  const draw = (p5) => {
    p5.fill("white");
    p5.square(200, 200, 100);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Algo2;
