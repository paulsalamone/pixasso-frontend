import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const Algo1 = (props) => {
  console.log("Props A =" + props.parameterA);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.background(10);
    p5.frameRate(10);

    for (let i = 0; i < p5.width / 10; i++) {
      for (let j = 0; j < p5.height / 10; j++) {
        p5.fill(i * 10 + j * 20);
        p5.square(i * props.parameterA, j * 10, 10);
        // p5.square(i * props.parameterA, j * props.parameterA, props.A);
      }
    }
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Algo1;
