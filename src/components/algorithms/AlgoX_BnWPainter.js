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
//ALGO-SPECIFIC DEPENDENCIES:
import { Algo3Context, Algo3Controller } from "./Algo3Context";
import Algo3Parameter from "./Algo3Parameter";

const Algo3 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [_, set_] = useContext(Algo3Context);
  const [backup, setBackup] = useState(_);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    set_(backup);
    // console.log(refresh);
    setRefresh(false);
  }, [refresh]);

  ////// P5 ///////

  let x = 250;
  let y = 250;
  let r;
  let g;
  let b;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    // x = p5.width / 2;
    // console.log("x: " + x);
    // y = p5.height / 2;
    // console.log("y: " + y);

    r = p5.random(200, 255);
    g = p5.random(200, 255);
    b = p5.random(200, 255);

    p5.background(0);
  };

  // console.log(x, y, r, g, b);

  function draw(p5) {
    if (saveImage === true) {
      p5.save("PIXASSO.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }
    p5.strokeWeight(_.F);
    if (startStop.start) {
      p5.background(0, 15);
      p5.frameRate(7);

      for (let i = 0; i < 1000; i++) {
        p5.fill("white");
        p5.square(x, y, _.A);
        x += p5.random(-_.D, _.D);
        y += p5.random(-_.E, _.E);
        x = p5.constrain(x, 0, 500);
        y = p5.constrain(y, 0, 500);
      }
      for (let i = 0; i < 1000; i++) {
        p5.fill("black");
        p5.stroke("white");
        p5.square(x - 20, y - 20, _.B);
        p5.fill("white");
        p5.stroke("black");
        p5.square(x, y, _.B);
        x += p5.random(-_.D, _.D);
        y += p5.random(-_.E, _.E);
        x = p5.constrain(x, 0, 500);
        y = p5.constrain(y, 0, 500);
      }
      for (let i = 0; i < 2000; i++) {
        p5.fill("white");
        p5.square(x, y, p5.random(_.C, _.C + 5));
        x += p5.random(-_.D, _.D);
        y += p5.random(-_.E, _.E);
        x = p5.constrain(x, 0, 500);
        y = p5.constrain(y, 0, 500);
      }
    }
    // x += p5.random(-5, 5);
    // y += p5.random(-5, 5);

    // for (let i = 0; i < 1000; i++) {
    //   step(p5, 20, 255, 3);
    // }
  }

  function step(p5, fat, red, vert) {
    x += p5.random(-5, 5);
    y += p5.random(-5, 5);

    x = p5.constrain(x, 0, p5.width);
    y = p5.constrain(y, 0, p5.height);

    r += p5.random(0, 255);
    g += p5.random(0, 255);
    b += p5.random(0, 255);

    r = p5.constrain(r, 220, 255);
    // g = p5.constrain(g, 220, 255);
    // b = p5.constrain(b, 220, 255);
    // p5.noStroke();

    p5.fill(r, 80, 20, 20);
    // square(x, y, fat);
    // p5.fill("red");
    p5.circle(p5.random(400), p5.random(400), fat);

    // p5.circle(x, y, fat);
    // triangle(x, y, x + 10, y, (x + 10)/2, y - 10)
  }

  // END P5 ALGO

  return (
    <>
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
          <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Algo3Parameter />
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
            <h4>Group 1:</h4>
            <Algo3Parameter
              name="A"
              value={_.A}
              id="A"
              min="10"
              max="100"
              step="0"
            />

            <Algo3Parameter
              name="B"
              value={_.B}
              id="B"
              min="5"
              max="30"
              step="0"
            />
            <Algo3Parameter
              name="C"
              value={_.C}
              id="C"
              min="0"
              max="5"
              step="0.5"
            />
          </div>
          <div className="parameters-group">
            <h4>Group 3:</h4>
            <Algo3Parameter
              name="D"
              value={_.D}
              id="D"
              min="0"
              max="20"
              step="0"
            />
            <Algo3Parameter
              name="E"
              value={_.E}
              id="E"
              min="0"
              max="20"
              step="0"
            />
            <Algo3Parameter
              name="F"
              value={_.F}
              id="F"
              min="0.5"
              max="2"
              step=".05"
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
    </>
  );
};

export default Algo3;
