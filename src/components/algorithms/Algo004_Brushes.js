import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import loadImage from "react-p5";
import Algo3Sketch from "./Algo3Sketch";
import Algo3SketchB from "./Algo3SketchB";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import { SaveContext } from "../../contexts/SaveContext";
import Save from "../editorComponents/Save";
import { RefreshContext } from "../../contexts/RefreshContext";
import Refresh from "../editorComponents/Refresh";
import Upload from "../editorComponents/Upload";
import Parameter from "../editorComponents/Parameter";

let r, g, b;
let c1, c2;
let hue, saturation, brightness;
let gradStart, gradEnd;

const Algo4 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [_, set_] = useState({
    BGhue: 47,
    BGhueSettings: { name: "BGhue", id: "Hue", min: 0, max: 360 },
    BGsaturation: 8,
    BGbrightness: 95,

    red: 185,
    green: 185,
    blue: 185,

    Asize: 128,
    Ahoriz: 4,
    Avert: 2,
    Ared: 200,
    Agreen: 152,
    Ablue: 140,

    Bsize: 50,
    Bhoriz: 10,
    Bvert: 2,
    Bred: 242,
    Bgreen: 200,
    Bblue: 180,

    Csize: 2,
    Choriz: 9,
    Cvert: 2,
    Cred: 252,
    Cgreen: 244,
    Cblue: 220,
  });
  const [backup, setBackup] = useState(_);
  const [wipe, setWipe] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  //when refresh is triggered, fills _ with backup state
  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

  //handles all parameters:
  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  const handleWipe = () => {
    setWipe(!wipe);
    setRefresh(true);
  };

  let c1, c2;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
    p5.background(0);
    // c1 = p5.color(255);
    // c2 = p5.color(0);
    p5.colorMode(p5.HSB, 360, 100, 100, 10);
  };

  function draw(p5) {
    p5.frameRate(7);
    p5.colorMode(p5.HSB, 360, 100, 100, 10);

    if (saveImage === true) {
      p5.save("PIXASSO.png");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness);
      //  GRADIENT CODE
      // for (let y = 0; y < p5.height; y++) {
      //   let n = p5.map(y, 0, p5.height, 0, 1);
      //   let newc = p5.lerpColor(c1, c2, n);
      //   p5.stroke(newc, 10);
      //   p5.line(0, y, p5.width, y);
      // }
    }
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
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
              max="20"
              handleParameter={handleParameter}
            />
            <Parameter
              name="BGbrightness"
              value={_.BGbrightness}
              id="Brightness"
              min="60"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            {/* {!wipe ? (
              <Algo3Sketch className="x" setup={setup} draw={draw} />
            ) : (
              <Algo3SketchB className="x" setup={setup} draw={draw} />
            )} */}
            <Sketch className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <button onClick={handleWipe}>Wipe Screen</button>
            <Refresh />
            <Save />
            <StartStop />
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Big Clouds:</h4>
            <Parameter
              name="Asize"
              value={_.Asize}
              id="Size"
              min="60"
              max="180"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Ahoriz"
              value={_.Ahoriz}
              id="Horizontal"
              min="0"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Avert"
              value={_.Avert}
              id="Vertical"
              min="0"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <div className="parameter-spacer"></div>
            <Parameter
              name="Ared"
              value={_.Ared}
              id="Red"
              min="120"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Agreen"
              value={_.Agreen}
              id="Green"
              min="120"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Ablue"
              value={_.Ablue}
              id="blue"
              min="120"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
          </div>

          <div className="parameters-group">
            <h4>Medium Clouds:</h4>

            <Parameter
              name="Bsize"
              value={_.Bsize}
              id="Size"
              min="10"
              max="35"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bhoriz"
              value={_.Bhoriz}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bvert"
              value={_.Bvert}
              id="Vertical"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <div className="parameter-spacer"></div>

            <Parameter
              name="Bred"
              value={_.Bred}
              id="Red"
              min="180"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bgreen"
              value={_.Bgreen}
              id="Green"
              min="180"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bblue"
              value={_.Bblue}
              id="blue"
              min="180"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo4;
