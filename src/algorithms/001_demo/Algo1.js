import { useState, useEffect } from "react";
import Sketch from "react-p5";

const Algo1 = (props) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);

  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [aa, setAA] = useState(0);

  // START P5 SKETCH: //
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.frameRate(20);
    //paused drawing starts here:

    if (props.start) {
      p5.square(200, 200, 200);
    }
  };

  // END P5 SKETCH //

  return (
    <>
      <h1>algo 1</h1>
      <Sketch setup={setup} draw={draw} className="p5Sketch" />
    </>
  );
};

export default Algo1;
