import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Parameter from "../../components/editorComponents/Parameter";
import { ProjectContext } from "../../contexts/ProjectContext";

const Algo1 = (props) => {
  const [project, setProject] = useContext(ProjectContext);
  const [_, set_] = useState({
    squareSize: 50,
    spacing: 15,
    checkSize: 50,
    hue: 0,
    saturation: 20,
    brightness: 50,
    strokeWeight: -2,
    strokeHue: 0,
    strokeBrightness: 0,
    randomColors: 0,
    randomSize: 3,
    columnize: 0,
    shake: 3,
  });

  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(project.width, project.height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    if (project.start) {
      p5.background(project.hue, project.saturation, project.brightness);
      p5.frameRate(project.rate);

      p5.colorMode(p5.HSB);
      p5.rectMode(p5.CENTER);
      p5.stroke(_.strokeHue, _.strokeBrightness, _.strokeBrightness);
      p5.strokeWeight(_.strokeWeight);

      //GRID
      for (let i = 0; i < 100; i += 1) {
        for (let j = 0; j < 100; j += 1) {
          if (i % 2 !== 0 || j % 2 !== 0) {
            // NORMAL SQUARE

            p5.fill(_.hue, _.saturation, _.brightness);
            p5.translate(_.columnize / 10, 0);

            p5.circle(
              i * _.squareSize + p5.random(0, _.shake),
              j * _.squareSize + p5.random(0, _.shake),
              _.squareSize - _.spacing + p5.random(0, _.randomSize)
            );
          } else {
            // DARK SQUARE
            p5.fill(_.hue, _.saturation / 2, _.brightness - 50);
            p5.translate(_.columnize / 10, 0);
            p5.square(
              i * _.squareSize + p5.random(0, _.shake),
              j * _.squareSize + p5.random(0, _.shake),
              _.checkSize - _.spacing + p5.random(0, _.randomSize)
            );
          }
        }
      }
    }
  };

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  if (project.start) {
    console.log("start");
  } else {
    console.log("stop");
    parameterStatus = "contrast(50%) saturate(0%) brightness(1.2)";
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="canvas-container">
          <Sketch setup={setup} draw={draw} />
        </div>
        <div className="parameters" style={{ filter: `${parameterStatus}` }}>
          <div className="parameters-group">
            <p>Sizing:</p>
            <Parameter
              name="squareSize"
              value={_.squareSize}
              min="1"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="spacing"
              value={_.spacing}
              min="10"
              max="80"
              handleParameter={handleParameter}
            />
            <Parameter
              name="checkSize"
              value={_.checkSize}
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Color:</p>
            <Parameter
              name="hue"
              value={_.hue}
              min="0"
              max="360"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="saturation"
              value={_.saturation}
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="brightness"
              value={_.brightness}
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Border:</p>
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              min="-2"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="strokeBrightness"
              value={_.strokeBrightness}
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="strokeHue"
              value={_.strokeHue}
              min="0"
              max="360"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Effects:</p>

            <Parameter
              name="columnize"
              value={_.columnize}
              min="0"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomSize"
              value={_.randomSize}
              min="0"
              max="50"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="shake"
              value={_.shake}
              min="0"
              max="40"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo1;
