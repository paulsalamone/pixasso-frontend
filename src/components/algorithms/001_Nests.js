import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Parameter from "../editorComponents/Parameter";
import { ProjectContext } from "../../contexts/ProjectContext";

const Nests = (props) => {
  const [project, setProject] = useContext(ProjectContext);

  const [_, set_] = useState({
    squareSize: 62,
    spacing: 22,
    checkSize: 64,
    hue: 0,
    saturation: 60,
    brightness: 50,
    strokeWeight: 0,
    strokeHue: 0,
    strokeBrightness: 0,
    randomColors: 0,
    randomSize: 3,
    columnize: 0,
    shake: 3,
    BGhue: 100,
    BGsaturation: 50,
    BGbrightness: 50,
  });

  useEffect(() => {
    setProject({ ...project, start: true });
  }, []);

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
      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness);
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

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters">
          <div className="parameters-group">
            <p>BackGround Color:</p>
            <Parameter
              name="BGhue"
              value={_.BGhue}
              id="Hue"
              min="1"
              max="360"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="BGsaturation"
              value={_.BGsaturation}
              id="Saturation"
              min="0"
              max="100"
              handleParameter={handleParameter}
            />
            <Parameter
              name="BGbrightness"
              value={_.BGbrightness}
              id="Brightness"
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <Sketch setup={setup} draw={draw} />
        </div>
        <div className="parameters">
          <div className="parameters-group">
            <p>Sizing:</p>
            <Parameter
              name="squareSize"
              value={_.squareSize}
              id="Square Size"
              min="1"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="spacing"
              value={_.spacing}
              id="Spacing"
              min="10"
              max="80"
              handleParameter={handleParameter}
            />
            <Parameter
              name="checkSize"
              value={_.checkSize}
              id="Black square size"
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
              id="Hue"
              min="0"
              max="360"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="saturation"
              value={_.saturation}
              id="Saturation"
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="brightness"
              value={_.brightness}
              id="Brightness"
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
              id="Stroke weight"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="strokeBrightness"
              value={_.strokeBrightness}
              id="Stroke brightness"
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="strokeHue"
              value={_.strokeHue}
              id="Stroke hue"
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
              id="Spread columns"
              min="0"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomSize"
              value={_.randomSize}
              id="Random size"
              min="0"
              max="50"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="shake"
              value={_.shake}
              id="Shake"
              min="0"
              max="50"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nests;
