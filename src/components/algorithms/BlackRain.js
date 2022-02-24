import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Parameter from "../../components/editorComponents/Parameter";
import { ProjectContext } from "../../contexts/ProjectContext";

const Algo2 = (props) => {
  const [project, setProject] = useContext(ProjectContext);
  const [_, set_] = useState({
    //black
    line1weight: 2,
    line1angle: 0,
    line1spacing: 3,

    //grey
    line2weight: 2,
    line2angle: 5,
    line2spacing: 3,

    //white
    line3weight: 1,
    line3angle: 75,
    line3spacing: 7,
  });

  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(project.width, project.height).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 100);
  };

  // ALGO NAME: BLACK RAIN
  const draw = (p5) => {
    p5.colorMode(p5.HSB, 100);

    p5.background(project.hue, project.saturation, project.brightness);
    // p5.background("white");
    p5.translate(-220, 0);
    p5.frameRate(10);

    //LINE 1
    p5.strokeWeight(_.line1weight);
    p5.stroke(0);
    for (let i = 0; i < p5.width; i += _.line1spacing / 2) {
      p5.line(
        i * 10,
        0,
        i * 10 + _.line1angle / 2,
        p5.height + p5.random(0, 25)
      );
    }

    //LINE 2
    p5.strokeWeight(_.line2weight);
    p5.stroke(0);
    for (let i = 0; i < p5.width; i += _.line2spacing / 10) {
      p5.line(i * 20, 0, i * 20 + _.line2angle / 2, p5.height);
    }
    //LINE 3
    p5.strokeWeight(_.line3weight);

    p5.stroke(0);
    for (let i = 0; i < p5.width; i += _.line3spacing / 10) {
      p5.line(i * 15, 0, i * 15 + _.line3angle / 2, p5.height);
    }
  };

  return (
    <>
      <div className="canvas-with-parameters">
        <h1>Black Rain (under construction</h1>
        <div className="canvas-container">
          <Sketch setup={setup} draw={draw} />
        </div>
        {/* PARAMETERS */}
        <div className="parameters">
          <div className="parameters-group">
            <p>Line1:</p>
            <Parameter
              name="line1weight"
              id="Weight"
              value={_.line1weight}
              min="1"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line1angle"
              id="Angle"
              value={_.line1angle}
              min="0"
              max="400"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line1spacing"
              value={_.line1spacing}
              min="1"
              max="40"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Line2:</p>
            <Parameter
              name="line2weight"
              id="Weight"
              value={_.line2weight}
              min="1"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line2angle"
              id="Angle"
              value={_.line2angle}
              min="0"
              max="400"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line2spacing"
              value={_.line2spacing}
              min="3"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <p>Line3:</p>
            <Parameter
              name="line3weight"
              id="Weight"
              value={_.line3weight}
              min="0"
              max="5"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line3angle"
              id="Angle"
              value={_.line3angle}
              min="0"
              max="400"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line3spacing"
              value={_.line3spacing}
              min="3"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo2;
