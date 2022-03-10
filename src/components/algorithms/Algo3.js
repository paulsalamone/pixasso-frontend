import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import loadImage from "react-p5";
import SketchHost from "./SketchHost";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import { SaveContext } from "../../contexts/SaveContext";
import Save from "../editorComponents/Save";
import { RefreshContext } from "../../contexts/RefreshContext";
import Refresh from "../editorComponents/Refresh";
import Upload from "../editorComponents/Upload";
import Parameter from "../editorComponents/Parameter";
import ParameterColor from "../editorComponents/ParameterColor";
import SaveToCloud from "../editorComponents/SaveToCloud";
import Download from "../editorComponents/Download";
import WipeScreen from "../editorComponents/WipeScreen";

let r, g, b;
let c1, c2;
let hue, saturation, brightness;
let gradStart, gradEnd;

const Algo3 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useState(false);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [_, set_] = useState({
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

  let x = 400;
  let y = 250;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
    p5.background(40);
    p5.noStroke();
    r = 100;
    g = 100;
    b = 100;
  };

  function draw(p5) {
    p5.frameRate(7);

    if (saveImage) {
      p5.save("PIXASSO.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.background(0, 0, 0, 1);
      // BIG CLOUDS
      for (let i = 0; i < 2000; i++) {
        step(p5, _.Asize, _.Ahoriz, _.Avert, _.Ared, _.Agreen, _.Ablue, 7);
      }
      // MEDIUM CLOUDS
      for (let i = 0; i < 2000; i++) {
        step(p5, _.Bsize, _.Bhoriz, _.Bvert, _.Bred, _.Bgreen, _.Bblue, 4);
      }
      // SMALL CLOUDS
      for (let i = 0; i < 2000; i++) {
        step(p5, _.Csize, _.Choriz, _.Cvert, _.Cred, _.Cgreen, _.Cblue, 6);
      }
    }
  }

  function step(p5, size, horiz, vert, red, green, blue, glow) {
    if (startStop.start) {
      x += p5.random(-horiz, horiz);
      y += p5.random(-vert, vert);
      x = p5.constrain(x, 0, p5.width);
      y = p5.constrain(y, 0, p5.height);

      r += p5.random(-1, 1);
      g += p5.random(-1, 1);
      b += p5.random(-1, 1);

      r = p5.constrain(r, red - 20, red);
      g = p5.constrain(g, green - 20, green);
      b = p5.constrain(b, blue - 20, blue);

      //shadow
      p5.fill(0, 0, 0, 1);
      p5.circle(x - 2, y + 2, size);

      //highlight
      p5.fill(255, 255, 255, 2);
      p5.circle(x + 5, y - 5, size);

      //glow
      p5.fill(r, g, b, 1);
      p5.circle(x + glow, y + glow, size);
      p5.circle(x - glow, y + glow, size);
      p5.circle(x + glow, y - glow, size);
      p5.circle(x - glow, y - glow, size);

      //cloud body
      p5.fill(r, g, b, 90);
      p5.circle(x, y, size);
    }
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
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
            <ParameterColor
              name="Ared"
              value={_.Ared}
              id="Red"
              min="120"
              max="255"
              step="0"
              color="red"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Agreen"
              value={_.Agreen}
              id="Green"
              min="120"
              max="255"
              step="0"
              color="green"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Ablue"
              value={_.Ablue}
              id="blue"
              min="120"
              max="255"
              step="0"
              color="blue"
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            {/* <Sketch className="x" setup={setup} draw={draw} /> */}

            <SketchHost wipe={wipe} className="x" setup={setup} draw={draw} />
            {/* {!wipe ? (
              <SketchHost className="x" setup={setup} draw={draw} />
            ) : (
              <SketchHostB className="x" setup={setup} draw={draw} />
            )} */}
          </div>
          <div className="canvas-utilities">
            {/* <button onClick={handleWipe}>Wipe Screen</button> */}
            <div>
              <Download setSaveImage={setSaveImage} />
              <SaveToCloud />
            </div>
            <div>
              <WipeScreen wipe={wipe} setWipe={setWipe} />
              <Refresh />
              <StartStop />
            </div>
          </div>
        </div>
        <div className="parameters-right">
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

            <ParameterColor
              name="Bred"
              value={_.Bred}
              id="Red"
              min="120"
              max="255"
              step="0"
              color="red"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Bgreen"
              value={_.Bgreen}
              id="Green"
              min="120"
              max="255"
              step="0"
              color="green"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Bblue"
              value={_.Bblue}
              id="blue"
              min="120"
              max="255"
              step="0"
              color="blue"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Small Clouds:</h4>
            <Parameter
              name="Csize"
              value={_.Csize}
              id="Size"
              min="1"
              max="5"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Choriz"
              value={_.Choriz}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Cvert"
              value={_.Cvert}
              id="Vertical"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <div className="parameter-spacer"></div>

            <ParameterColor
              name="Cred"
              value={_.Cred}
              id="Red"
              min="120"
              max="255"
              step="0"
              color="red"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Cgreen"
              value={_.Cgreen}
              id="Green"
              min="120"
              max="255"
              step="0"
              color="green"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="Cblue"
              value={_.Cblue}
              id="blue"
              min="120"
              max="255"
              step="0"
              color="blue"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo3;
