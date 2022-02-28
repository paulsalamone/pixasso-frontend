import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import Save from "../editorComponents/Save";
import { SaveContext } from "../../contexts/SaveContext";
import { Algo3Context, Algo3Controller } from "./Algo3Context";
import Algo3Parameter from "./Algo3Parameter";

const Algo3 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [_, set_] = useContext(Algo3Context);
  const [backup, setBackup] = useState(_);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

  const refreshHandler = (e) => {
    setRefresh(true);
    console.log("refresh triggered");
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.frameRate(7);

    if (saveImage === true) {
      p5.save("PIXASSO.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.colorMode(p5.HSB);
      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 50);
      p5.colorMode(p5.RGB);

      p5.stroke(_.strokeShade, _.strokeShade, _.strokeShade, 50);

      p5.translate(p5.width / 2, p5.height / 2);
      p5.scale(_.scale / 2);

      let jglX = p5.random(-_.jiggle, _.jiggle);
      let jglY = p5.random(-_.jiggle, _.jiggle);

      p5.translate(_.shake, _.randomSize);
      for (let i = 0; i < 30; i += 2) {
        let jglXX = p5.random(-_.jiggle2, _.jiggle2);
        let jglYY = p5.random(-_.jiggle2, _.jiggle2);

        p5.strokeWeight(p5.random(_.strokeWeight / 4, _.strokeWeight));

        p5.fill(
          p5.random(_.red - 100, _.red),
          p5.random(_.green - 100, _.green),
          p5.random(_.blue - 100, _.blue),
          50
        );
        psycheCircle(
          p5,
          _.spread,
          _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          -_.spread,
          _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          -_.spread,
          -_.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          _.spread,
          -_.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          _.spread / _.spread,
          _.spread / _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
      }
    }
  };
  const psycheCircle = (p5, x, y, jglX, jglXX, jglY, jglYY, i, sizeRange) => {
    return p5.circle(
      jglX + jglXX + x,
      jglY + jglYY + y,
      p5.width - i * 20 - p5.random(0, sizeRange)
    );
  };

  // END P5 ALGO

  return (
    <>
      {/* <Algo3Controller> */}
      <div className="canvas-with-parameters">
        <div className="parameters-left">
          <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Algo3Parameter />
            </div>
          </div>
          <div className="parameters-group">
            <h4>BackGround Color:</h4>
            <Algo3Parameter
              name="BGhue"
              value={_.BGhue}
              id="Hue"
              min="1"
              max="360"
              step="0"
            />
            <Algo3Parameter
              name="BGsaturation"
              value={_.BGsaturation}
              id="Saturation"
              min="0"
              max="100"
            />
            <Algo3Parameter
              name="BGbrightness"
              value={_.BGbrightness}
              id="Brightness"
              min="0"
              max="100"
              step="0"
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            <Sketch className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <button onClick={refreshHandler}>Refresh</button>
            <Save />
            <StartStop />
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Sizing:</h4>
            <Algo3Parameter
              name="sizeRange"
              value={_.sizeRange}
              id="Size Range"
              min="1"
              max="500"
              step="0"
            />

            <Algo3Parameter
              name="jiggle"
              value={_.jiggle}
              id="Jiggle"
              min="0"
              max="100"
              step="0"
            />
            <Algo3Parameter
              name="jiggle2"
              value={_.jiggle2}
              id="Scramble"
              min="0"
              max="200"
              step="0"
            />
          </div>
          <div className="parameters-group">
            <h4>Color:</h4>
            <Algo3Parameter
              name="red"
              value={_.red}
              id="Red"
              min="0"
              max="255"
              step="0"
            />
            <Algo3Parameter
              name="green"
              value={_.green}
              id="Green"
              min="0"
              max="255"
              step="0"
            />
            <Algo3Parameter
              name="blue"
              value={_.blue}
              id="Blue"
              min="0"
              max="255"
              step="0"
            />
          </div>
          <div className="parameters-group">
            <h4>Border:</h4>
            <Algo3Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              id="Stroke Weight"
              min="0"
              max="60"
              step="0"
            />

            <Algo3Parameter
              name="strokeShade"
              value={_.strokeShade}
              id="Stroke Shade"
              min="0"
              max="255"
              // step="0"
            />
            <Algo3Parameter
              name="spread"
              value={_.spread}
              id="Spread"
              min="0"
              max="400"
              step="0"
            />
          </div>
          <div className="parameters-group">
            <h4>Effects:</h4>

            <Algo3Parameter
              name="scale"
              value={_.scale}
              id="Scale"
              min="1"
              max="6"
            />
            <Algo3Parameter
              name="randomSize"
              value={_.randomSize}
              id="Move Vertically"
              min="-200"
              max="200"
              step="0"
            />
            <Algo3Parameter
              name="shake"
              value={_.shake}
              id="Move Horizontally"
              min="-200"
              max="200"
              step="0"
            />
          </div>
        </div>
      </div>
      {/* </Algo3Controller> */}
    </>
  );
};

export default Algo3;
