import { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import { ParametersContext } from "../../contexts/ParametersContext";

const Algo1 = (props) => {
  // DECLARE PARAMETER USE STATES:
  const [a, setA] = useContext(ParametersContext);
  const [b, setB] = useContext(ParametersContext);
  const [c, setC] = useContext(ParametersContext);
  const [d, setD] = useContext(ParametersContext);
  const [e, setE] = useContext(ParametersContext);
  const [f, setF] = useContext(ParametersContext);
  const [g, setG] = useContext(ParametersContext);
  const [h, setH] = useContext(ParametersContext);
  const [aa, setAA] = useContext(ParametersContext);

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

  //  EVENT HANDLERS FOR PARAMETERS

  return (
    <>
      <h1>algo 1</h1>
      <Sketch setup={setup} draw={draw} className="p5Sketch" />
      <div className="parameters">
        <div className="parameter-group">
          <div className="parameter">
            <label>Parameter name</label>
            <input type="range"></input>
          </div>
          <div className="parameter">
            <label>Parameter name</label>
            <input type="range"></input>
          </div>
          <div className="parameter">
            <label>Parameter name</label>
            <input type="range"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo1;
