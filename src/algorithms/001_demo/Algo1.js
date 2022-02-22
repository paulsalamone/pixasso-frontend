import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Parameter from "./Parameter";
import { ProjectContext } from "../../contexts/ProjectContext";

const Algo1 = (props) => {
  const [project, setProject] = useContext(ProjectContext);
  const [_, set_] = useState({
    squareSize: 50,
    squareMargin: 15,
    squareWidth: 5,
    red: 120,
    green: 120,
    blue: 120,
    stroke: 10,
    strokeWeight: 0,
    cornerRadius: 0,
    shear: 0,
    rotate: 0,
    randomize: 0,
  });

  // console.log(Object.keys(_.blue.value));

  const handleParameter = ({ currentTarget: input }) => {
    set_({ ..._, [input.name]: input.value });
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(project.width, project.height).parent(canvasParentRef);
  };
  const draw = (p5) => {
    p5.background(project.red, project.green, project.blue);
    p5.rectMode(p5.CENTER);

    //shadow
    p5.noStroke();
    // p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.radians(_.rotate));
    for (let i = 0; i < 30; i += 1) {
      for (let j = 0; j < 60; j += 1) {
        p5.fill(120, 120, 120, 100);
        p5.square(
          i * _.squareSize + 8,
          j * _.squareSize + 8,
          _.squareSize - _.squareMargin
          // _.cornerRadius
        );
      }
    }
    p5.strokeWeight(_.strokeWeight);
    p5.stroke(_.stroke, _.stroke, _.stroke);
    // let margin = _.squareMargin;
    for (let i = 0; i < 30; i += 1) {
      for (let j = 0; j < 60; j += 1) {
        if (i % 2 !== 0 || j % 2 !== 0) {
          p5.fill(_.red, _.green, _.blue);
        } else {
          p5.fill(_.red / 2, _.green / 2, _.blue / 2);
        }
        p5.square(
          i * _.squareSize,
          j * _.squareSize,
          _.squareSize - _.squareMargin
          // _.cornerRadius
        );
      }
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <button onClick={refreshPage}>refresh</button>{" "}
      <p>Algo name: Shadow Checkers</p>
      <div className="canvas-with-parameters">
        <div className="canvas-container">
          <Sketch setup={setup} draw={draw} />
        </div>
        {/* PARAMETERS */}
        <div className="parameters">
          <div className="parameters-group">
            <p>Sizing:</p>
            <Parameter
              name="squareSize"
              value={_.squareSize}
              min="1"
              max="100"
              handleParameter={handleParameter}
            />
            <Parameter
              name="squareMargin"
              value={_.squareMargin}
              min="10"
              max="80"
              handleParameter={handleParameter}
            />
            <Parameter
              name="squareWidth"
              value={_.squareWidth}
              min="0"
              max="20"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Color:</p>
            <Parameter
              name="red"
              value={_.red}
              min="0"
              max="255"
              handleParameter={handleParameter}
            />
            <Parameter
              name="green"
              value={_.green}
              min="0"
              max="255"
              handleParameter={handleParameter}
            />
            <Parameter
              name="blue"
              value={_.blue}
              min="0"
              max="255"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Border:</p>
            <Parameter
              name="stroke"
              value={_.stroke}
              min="0"
              max="100"
              handleParameter={handleParameter}
            />
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              min="0"
              max="20"
              handleParameter={handleParameter}
            />
            <Parameter
              name="cornerRadius"
              value={_.cornerRadius}
              min="0"
              max="10"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Effects:</p>
            <Parameter
              name="shear"
              value={_.shear}
              min="0"
              max="2000"
              handleParameter={handleParameter}
            />
            <Parameter
              name="rotate"
              value={_.rotate}
              min="0"
              max="90"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomize"
              value={_.randomize}
              min="0"
              max="255"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo1;
