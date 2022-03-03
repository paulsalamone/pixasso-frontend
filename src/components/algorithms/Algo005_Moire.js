import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Refresh from "../editorComponents/Refresh";
import { RefreshContext } from "../../contexts/RefreshContext";

import Parameter from "../editorComponents/Parameter";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
const Algo5 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [wipe, setWipe] = useState(false);
  const [saveImage, setSaveImage] = useState(false);
  const [iterate, setIterate] = useState(0);

  const [refresh, setRefresh] = useContext(RefreshContext);
  const handleSaveImage = (e) => {
    console.log("handle save image");
    setSaveImage(true);
  };

  const [_, set_] = useState({
    //black
    line1weight: 7,
    line1angle: 20,
    line1spacing: 10,

    //grey
    line2weight: 2,
    line2angle: 5,
    line2spacing: 3,

    //white
    line3weight: 2,
    line3angle: 75,
    line3spacing: 7,
    BGhue: 0,
    BGsaturation: 100,
    BGbrightness: 100,
  });
  const [backup, setBackup] = useState(_);

  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    setStartStop({ ...startStop, start: true });
  }, []);

  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };
  let it = 0;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
    p5.background(255);
    p5.colorMode(p5.HSB, 360, 100, 100, 100);
  };

  // *****************************
  // WHITE STRIPES ALGO NOTES:
  // -make "universal" sliders
  // -control: weight, spread, x and y of both, transparency, color, randomisation
  //make the circle a function!

  const draw = (p5) => {
    if (saveImage) {
      p5.save("output_canvas.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }
    p5.noFill();

    p5.frameRate(10);

    if (startStop.start) {
      //LINE 1

      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 90);
      // p5.translate(-220, 0);
      //   p5.strokeWeight(4);
      // p5.stroke(200, 100, 100);
      // p5.strokeWeight(1);
      // for (let i = 0; i < 50; i += 2) {
      //   p5.circle(100, 100, i * 10);
      // }

      for (let i = 0; i < 100; i += 2) {
        p5.strokeWeight(_.line1spacing);
        p5.stroke("blue");

        p5.circle(
          0 + p5.random(0, 5),
          _.line1angle + p5.random(0, 5),
          i * _.line1weight
        );

        p5.circle(
          800 + p5.random(0, 3),
          250 + p5.random(0, 3),
          i * _.line1weight
        );
        p5.stroke(255);

        p5.circle(
          0 + p5.random(0, 3),
          _.line1angle + p5.random(0, 3),
          i * _.line1weight
        );

        p5.circle(
          800 + p5.random(0, 3),
          250 + p5.random(0, 3),
          i * _.line1weight
        );
        p5.stroke("#00FF55");

        p5.circle(
          0 + p5.random(0, 3),
          _.line1angle + p5.random(0, 3),
          i * _.line1weight
        );

        p5.circle(
          800 + p5.random(0, 3),
          250 + p5.random(0, 3),
          i * _.line1weight
        );
        p5.stroke(0, 50);

        p5.circle(
          0 + p5.random(0, 3),
          400 + p5.random(0, 3),
          i * _.line1weight
        );

        p5.circle(
          800 + p5.random(0, 3),
          -_.line1angle + p5.random(0, 3),
          i * _.line1weight
        );
      }

      setIterate(iterate + 1);

      // //LINE 2
      // p5.strokeWeight(_.line2weight);
      // // p5.stroke(300, 100, 100);
      // p5.stroke(0);
      // for (let i = 0; i < p5.width; i += _.line2spacing / 10) {
      //   p5.line(i * 20, 0, i * 20 + _.line2angle / 2, p5.height);
      // }
      // // //LINE 3
      // p5.strokeWeight(_.line3weight);
      // p5.strokeWeight(2);
      // // p5.stroke(55);
      // p5.noFill();

      //RINGS
      // for (let k = 0; k < 100; k++) {
      //   p5.circle(200, 200, k * 20);
      // }
      // for (let k = 0; k < 100; k++) {
      //   p5.circle(350, 20, k * 20);
      // }

      // for (let i = 0; i < p5.width; i += _.line3spacing / 10) {
      //   p5.line(i * 15, 0, i * 15 + _.line3angle / 2, p5.height);
      // }
    }
  };

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left">
          <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Parameter />
            </div>
          </div>
          <div className="parameters-group">
            <h4>BackGround Color:</h4>
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
          <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Parameter />
              <Parameter />
              <Parameter />
            </div>
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            <Sketch setup={setup} draw={draw} />
          </div>

          <div className="canvas-utilities">
            <Refresh />

            <button onClick={handleSaveImage}>save to desktop</button>
            <StartStop />
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Line1:</h4>
            <Parameter
              name="line1weight"
              id="Weight"
              value={_.line1weight}
              min="5"
              max="30"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="line1angle"
              id="Angle"
              value={_.line1angle}
              min="0"
              max="60"
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
            <h4>Line2:</h4>
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
            <h4>Border:</h4>
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              id="Stroke Weight"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="strokeBrightness"
              value={_.strokeBrightness}
              id="Stroke Brightness"
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="strokeHue"
              value={_.strokeHue}
              id="Stroke Hue"
              min="0"
              max="360"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Effects:</h4>

            <Parameter
              name="columnize"
              value={_.columnize}
              id="Spread Columns"
              min="0"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomSize"
              value={_.randomSize}
              id="Random Size"
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

export default Algo5;
