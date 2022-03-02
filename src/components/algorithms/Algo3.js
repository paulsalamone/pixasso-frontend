import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import loadImage from "react-p5";
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

const Algo3 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [_, set_] = useState({
    Asize: 120,
    Ahoriz: 3,
    Avert: 2,
    Ared: 255,
    Agreen: 200,
    Ablue: 200,

    Bsize: 50,
    Bhoriz: 8,
    Bvert: 2,
    Bred: 200,
    Bgreen: 255,
    Bblue: 200,

    Csize: 3,
    Choriz: 2,
    Cvert: 2,
    Cred: 200,
    Cgreen: 200,
    Cblue: 255,
  });
  const [backup, setBackup] = useState(_);

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

    if (saveImage === true) {
      p5.save("PIXASSO.png");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.background(0, 0, 0, 1);
      for (let i = 0; i < 2000; i++) {
        step(p5, _.Asize, _.Ahoriz, _.Avert, _.Ared, _.Agreen, _.Ablue, 7);
      }
      for (let i = 0; i < 2000; i++) {
        step(p5, _.Bsize, _.Bhoriz, _.Bvert, _.Bred, _.Bgreen, _.Bblue, 4);
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

      r = p5.constrain(r, red - 40, red);
      g = p5.constrain(g, green - 40, green);
      b = p5.constrain(b, blue - 40, blue);

      //shadow
      // p5.fill(0, 0, 0, 1);
      // p5.circle(x - 5, y + 5, size);
      //highlight
      p5.fill(255, 255, 255, 1);
      p5.circle(x + 5, y - 5, size);

      //glow
      p5.fill(r, g, b, 1);
      p5.circle(x + glow, y + glow, size);
      p5.circle(x - glow, y + glow, size);
      p5.circle(x + glow, y - glow, size);
      p5.circle(x - glow, y - glow, size);

      //cloud body
      p5.fill(r, g, b);
      p5.circle(x, y, size);
    }
  }

  return (
    <>
      <div className="canvas-with-parameters">
        {/* <div className="parameters-left-1column">
          <div className="parameters-group">
            <h4>Toggles:</h4>
            <Parameter />
          </div>
        </div> */}

        <div className="canvas-container">
          <div className="artwork">
            <Sketch className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <Refresh />
            <Save />
            <StartStop />
          </div>
        </div>
        <div className="parameters-right-3column">
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
              min="180"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Agreen"
              value={_.Agreen}
              id="Green"
              min="180"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Ablue"
              value={_.Ablue}
              id="blue"
              min="180"
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
              max="40"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bhoriz"
              value={_.Bhoriz}
              id="Horizontal"
              min="0"
              max="30"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="Bvert"
              value={_.Bvert}
              id="Vertical"
              min="0"
              max="30"
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
          <div className="parameters-group">
            <h4>Small Clouds:</h4>
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              id="Stroke Weight"
              min="1"
              max="7"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo3;
