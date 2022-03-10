import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Refresh from "../editorComponents/Refresh";
import { RefreshContext } from "../../contexts/RefreshContext";
import Parameter from "../editorComponents/Parameter";
import ParameterColor from "../editorComponents/ParameterColor";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import { UserContext } from "../../contexts/UserContext";
// import { uploadImage } from "./SaveToCloud";
import SaveToCloud from "../editorComponents/SaveToCloud";
import Download from "../editorComponents/Download";

const Algo2 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [wipe, setWipe] = useState(false);
  const [saveImage, setSaveImage] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const [refresh, setRefresh] = useContext(RefreshContext);
  const handleSaveImage = (e) => {
    console.log("handle save image");
    setSaveImage(true);
  };

  const [_, set_] = useState({
    squareSize: 34,
    spacing: 10,
    checkSize: 34,
    hue: 0,
    saturation: 60,
    brightness: 80,
    strokeWeight: 0,
    strokeHue: 0,
    strokeBrightness: 40,
    randomColors: 0,
    randomSize: 3,
    columnize: 0,
    shake: 3,
    BGhue: 100,
    BGsaturation: 50,
    BGbrightness: 70,
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

  const handleWipe = () => {
    console.log("wipe");
    setWipe(true);
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    if (saveImage) {
      p5.save("output_canvas.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 5);
      p5.frameRate(startStop.rate);

      p5.colorMode(p5.HSB);
      p5.rectMode(p5.CENTER);

      //GRID
      for (let i = 0; i < 100; i += 1) {
        for (let j = 0; j < 100; j += 1) {
          if (i % 2 !== 0 || j % 2 !== 0) {
            // NORMAL SQUARE
            p5.stroke(_.strokeHue, _.strokeBrightness, _.strokeBrightness);
            p5.strokeWeight(_.strokeWeight);
            p5.circle(
              i * _.squareSize + p5.random(0, _.shake),
              j * _.squareSize + p5.random(0, _.shake),
              _.squareSize - _.spacing + p5.random(0, _.randomSize)
            );
            p5.fill(_.hue, _.saturation, _.brightness);
            p5.translate(_.columnize / 10, 0);

            p5.circle(
              i * _.squareSize + p5.random(0, _.shake),
              j * _.squareSize + p5.random(0, _.shake),
              _.squareSize - _.spacing + p5.random(0, _.randomSize)
            );
          } else {
            // DARK SQUARE
            p5.fill(
              _.hue,
              _.saturation / 2,
              _.brightness - 40 + p5.random(-20, 10)
            );
            p5.translate(_.columnize / 10, 0);
            p5.square(
              i * _.squareSize + p5.random(0, _.shake),
              j * _.squareSize + p5.random(0, _.shake),
              _.checkSize - _.spacing + p5.random(0, _.randomSize)
            );
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
        <div className="parameters-left-1column">
          {/* <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Parameter />
            </div>
          </div> */}
          <div className="parameters-group">
            <h4>BackGround:</h4>
            <ParameterColor
              name="BGhue"
              value={_.BGhue}
              id="Hue"
              min="1"
              max="360"
              step="0"
              color="hue"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="BGsaturation"
              value={_.BGsaturation}
              id="Saturation"
              min="0"
              max="100"
              color="saturation"
              hue={_.BGhue}
              handleParameter={handleParameter}
            />
            {console.log("----->" + _.BGhue)}

            <ParameterColor
              name="BGbrightness"
              value={_.BGbrightness}
              id="Brightness"
              min="0"
              max="100"
              step="0"
              color="brightness"
              hue={_.BGhue}
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            {/* <Algo2Sketch setup={setup} draw={draw} /> */}
            <Sketch setup={setup} draw={draw} />
          </div>

          <div className="canvas-utilities">
            <div>
              <Download setSaveImage={setSaveImage} />
              <SaveToCloud />
            </div>
            <div>
              <Refresh />
              <StartStop />
            </div>
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Sizing:</h4>
            <Parameter
              name="squareSize"
              value={_.squareSize}
              id="Circle Size"
              min="3"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="spacing"
              value={_.spacing}
              id="Spacing"
              min="-50"
              max="150"
              handleParameter={handleParameter}
            />
            <Parameter
              name="checkSize"
              value={_.checkSize}
              id="Square Size"
              min="-100"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Color:</h4>
            <ParameterColor
              name="hue"
              value={_.hue}
              id="Hue"
              min="0"
              max="360"
              step="0"
              color="hue"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="saturation"
              value={_.saturation}
              id="Saturation"
              min="0"
              max="100"
              step="0"
              color="saturation"
              hue={_.hue}
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="brightness"
              value={_.brightness}
              id="Brightness"
              min="0"
              max="100"
              step="0"
              color="brightness"
              hue={_.hue}
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Border:</h4>
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              id="Weight"
              min="0"
              max="15"
              step="0"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="strokeHue"
              value={_.strokeHue}
              id="Hue"
              min="5"
              max="355"
              color="hue"
              step="0"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="strokeBrightness"
              value={_.strokeBrightness}
              id="Brightness"
              min="5"
              max="95"
              step="0"
              color="brightness"
              hue={_.BGhue}
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
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="shake"
              value={_.shake}
              id="Shake"
              min="0"
              max="100"
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
