import { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import { ParametersContext } from "../../contexts/ParametersContext";

const Algo1 = (props) => {
  const [parameters, setParameters] = useContext(ParametersContext);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [aa, setAA] = useState(0);
  const [allParams, setAllParams] = useState([a, b, c, d, e, f, g, h, aa]);

  useEffect(() => {
    setParameters({
      parameter1: {
        name: "First parameter",
        min: 0,
        max: 10,
        value: a,
        set: setA,
      },
      parameter2: {
        name: "second parameter",
        min: 0,
        max: 10,
        value: b,
      },
      parameter3: {
        name: "third parameter",
        min: 0,
        max: 10,
        value: c,
      },
      parameter4: {
        name: "fourth parameter",
        min: 0,
        max: 10,
        value: d,
      },
    });
  }, []);

  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
  console.log("D: " + d);

  // START P5 SKETCH: //
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    // p5.circle(100, 100, 100);
  };

  let x = 0;

  const draw = (p5) => {
    // p5.circle(p5.frameCount + p5.random(0, 5) + 100, p5.frameCount, 50);
    // // x += 1;
    // if (p5.frameCount > p5.width || p5.frameCount > p5.height) {
    //   p5.frameCount = 0;
    // }
  };

  // END P5 SKETCH //

  return (
    <>
      {/* <h1>algo 1</h1> */}
      <Sketch setup={setup} draw={draw} className="p5Sketch" />
    </>
  );
};

export default Algo1;
