import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";

import { handleColors } from "./algoFunctions";
import { AlgoContext } from "../AlgoContext";

const Algo2 = () => {
  const [colors, setColors] = useContext(AlgoContext);
  const [stroke, setStroke] = useContext(AlgoContext);
  // const handleColors = useContext(AlgoContext);

  // const handleParameter = ({ currentTarget: input }, state, setter) => {
  //   setter({ ...state, [input.name]: input.value });
  // };

  const handleColors = ({ currentTarget: input }) => {
    setColors({ ...colors, [input.name]: input.value });
  };

  // const handleStroke = ({ currentTarget: input }) => {
  //   setStroke({ ...stroke, [input.name]: input.value });
  // };

  // const handleChange = ({currentTarget: input}) => {
  //   setUser({...user, [input.name]:input.value})
  // }

  // const [stroke, setStroke] = useState({
  //   strokeColor: 155,
  //   strokeWeight: 1,
  // });

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(10);
  };
  const draw = (p5) => {
    p5.fill(colors.red, colors.green, colors.blue);
    p5.stroke("white");
    p5.strokeWeight(stroke.strokeWeight);
    p5.square(200, 200, 100);
  };

  // console.log(rgb);

  return (
    <>
      <div>
        <label for="red">Red:</label>
        <input
          type="range"
          name="red"
          value={colors.red}
          min="0"
          max="255"
          onChange={handleColors}
        />
        {/* <input
          type="range"
          name="green"
          value={colors.green}
          min="0"
          max="255"
          onChange={handleParameter(colors, setColors)}
        ></input>
        <input
          type="range"
          name="blue"
          value={colors.blue}
          min="0"
          max="255"
          onChange={handleParameter(colors, setColors)}
        ></input>
        <input
          type="range"
          name="strokeWeight"
          value={stroke.strokeWeight}
          min="0"
          max="20"
          onChange={handleParameter(stroke, setStroke)}
        ></input> */}
      </div>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Algo2;
