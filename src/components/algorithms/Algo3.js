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
    BGhue: 0,
    BGsaturation: 50,
    BGbrightness: 50,
    red: 0,
    green: 180,
    blue: 180,
    A: 30,
    B: 1,
    C: 1,
    D: 3,
    E: 1,
    F: 0.5,
    C: 50,
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

  ////// P5 ///////

  let x = 250;
  let y = 250;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    console.log("setup triggered");
    p5.background(0);
    r = 100;
    g = 100;
    b = 100;
    hue = 0;
    saturation = 0;
    brightness = 0;

    // p5.colorMode(p5.HSB);
  };

  // console.log(x, y, r, g, b);

  function draw(p5) {
    p5.frameRate(7);

    // GRADIENT COLORS
    // c1 = p5.color(0);
    // c2 = p5.color(_.BGhue, _.BGsaturation, 191);

    if (saveImage === true) {
      p5.save("PIXASSO.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.noStroke();
      p5.colorMode(p5.RGB);

      // p5.colorMode(p5.HSB);
      // p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 10);
      p5.background(0, 0, 0, 1);

      // //GRADIENT RENDER v1
      // for (let y = 0; y < p5.height; y++) {
      //   let n = p5.map(y, 0, p5.height, 0, 1);
      //   let newc = p5.lerpColor(c1, c2, n);
      //   p5.stroke(newc, 2);
      //   p5.line(0, y, p5.width, y);
      // }

      //GRADIENT RENDER v2
      // for (let y = 0; y < p5.height; y++) {
      //   p5.stroke(1 * y, 20);
      //   p5.line(0, y, p5.width, y);
      // }

      p5.noStroke();

      // p5.translate(p5.width / 2, p5.height / 2);
      p5.scale(1);

      for (let i = 0; i < 2000; i++) {
        // p5, horiz, vert, size, red
        step(p5, _.B, _.C, _.A);
      }
      for (let i = 0; i < 2000; i++) {
        // p5, horiz, vert, size, red
        step(p5, 10, 1, 10, _.A);
      }
      for (let i = 0; i < 2000; i++) {
        // p5, horiz, vert, size, red
        step(p5, 5, 50, 2, _.A);
      }
    }
  }

  function step(p5, horiz, vert, size) {
    // change horiz range
    if (startStop.start) {
      x += p5.random(-horiz, horiz);
      //change vert range
      y += p5.random(-vert, vert);

      //constrain inside frame
      x = p5.constrain(x, 0, p5.width);
      y = p5.constrain(y, 0, p5.height);

      // randomize colors continuosly:
      // r = hh;
      r += p5.random(-1, 1);
      g += p5.random(-1, 1);
      b += p5.random(-1, 1);

      hue += p5.random(-1, 1);
      saturation += p5.random(-1, 1);
      brightness += p5.random(-1, 1);

      // r = p5.constrain(r, _.red, _.red + 20);
      // g = p5.constrain(g, _.green, _.green + 20);
      // b = p5.constrain(b, _.blue, _.blue + 20);
      r = p5.constrain(r, 10, _.red);
      g = p5.constrain(g, 10, _.green);
      b = p5.constrain(b, 10, _.blue);

      // hue = p5.constrain(hue, _.BGhue - 20, _.BGhue + 20);
      hue = p5.constrain(hue, 280, 360);

      console.log("BG hue: " + _.BGhue);
      console.log("hue: " + hue);
      saturation = p5.constrain(saturation, 0, _.BGsaturation - 50);
      brightness = p5.constrain(brightness, 40, _.BGbrightness);

      // hue = p5.constrain(r, _.BGhue, _.BGhue + 30);
      // saturation = p5.constrain(g, 0, _.BGsaturation);
      // brightness = p5.constrain(b, 0, _.BGbrightness);

      // hue = p5.constrain(r, _.A, _.A + 20);
      // saturation = p5.constrain(g, 0, _.B);
      // brightness = p5.constrain(b, 0, _.C);

      // // SHADOW
      p5.colorMode(p5.RGB);

      p5.fill(0, 0, 0, 3);
      p5.circle(x - 5, y + 5, size);

      // // // HALO

      // p5.fill(hue, saturation, brightness, 1);
      // p5.circle(x, y, size + 20);
      // p5.fill(hue, saturation, brightness, 1);
      // p5.circle(x, y, size + 50);

      // CLOUD
      // p5.fill(r, g, b);
      p5.colorMode(p5.HSB);
      p5.fill(hue, saturation, brightness);
      // p5.circle(x, y, size + 20);

      p5.circle(x, y, size);
      p5.colorMode(p5.RGB);
    }
  }

  // END P5 ALGO

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
            </div>
          </div>
          {/* <div className="parameters-group">
            <h4>Upload Background:</h4>
            <Upload imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </div> */}
        </div>

        {/* const [imageUrl, setImageUrl] = useState(""); */}

        <div className="canvas-container">
          <div
            className="artwork"

            // style={{ backgroundImage: `url(${imageUrl}`, height: "500px" }}
          >
            {/* <img src={imageUrl} /> */}
            <Sketch className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <Refresh />
            <Save />
            <StartStop />
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Big Cloud:</h4>
            <Parameter
              name="A"
              value={_.A}
              id="Size"
              min="30"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="B"
              value={_.B}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="C"
              value={_.C}
              id="Vertical"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Color:</h4>
            <Parameter
              name="red"
              value={_.red}
              id="Red"
              min="0"
              max="5"
              step=".5"
              handleParameter={handleParameter}
            />
            <Parameter
              name="green"
              value={_.green}
              id="Green"
              min="0"
              max="255"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="blue"
              value={_.blue}
              id="Blue"
              min="0"
              max="255"
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
              max="60"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="strokeShade"
              value={_.strokeShade}
              id="Stroke Shade"
              min="0"
              max="255"
              handleParameter={handleParameter}
              // step="0"
            />
            <Parameter
              name="spread"
              value={_.spread}
              id="Spread"
              min="0"
              max="400"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Effects:</h4>

            <Parameter
              name="scale"
              value={_.scale}
              id="Scale"
              min="1"
              max="6"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomSize"
              value={_.randomSize}
              id="Move Vertically"
              min="-200"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="shake"
              value={_.shake}
              id="Move Horizontally"
              min="-200"
              max="200"
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
