import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const Algo1 = (props) => {
  // const [backgroundColor, setBackgroundColor] = useState()
  const testWidth = props.formatWidth;

  console.log(props.formatWidth);
  console.log(props.formatHeight);
  console.log(props.BGcolor);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(props.formatWidth, props.formatHeight).parent(
      canvasParentRef
    );
    // p5.background(0);
  };

  const draw = (p5) => {
    p5.background(100);
    p5.frameRate(10);
    p5.fill("white");
    p5.circle(200, 200, 200);
    // p5.circle(p5.random(0, 200), p5.random(0, 200), 30);
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Algo1;
