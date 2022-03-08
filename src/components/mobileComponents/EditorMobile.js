import "../../styles/mobile.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sketch from "react-p5";
import Parameter from "../editorComponents/Parameter";
import ParameterColor from "../editorComponents/ParameterColor";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import axios from "axios";
import data from "../algorithms/parameterData.json";
import { RefreshContext } from "../../contexts/RefreshContext";
import Refresh from "../editorComponents/Refresh";
import { HexColorPicker } from "react-colorful";
import Save from "../editorComponents/Save";
import Logo from "../../images/logo-small-white.png";

let iterator = 0;

let rr = 0;
let gg = 0;
let bb = 0;

const EditorMobile = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [imageUrl, setImageUrl] = useState("");
  const [saveImage, setSaveImage] = useState(false);
  let canvas = "";
  const navigate = useNavigate();

  useEffect(() => {
    setStartStop({ ...startStop, start: true });
  }, []);

  const handleSaveImage = (e) => {
    setSaveImage(true);
  };

  const [_, set_] = useState({
    paramA: 1,
    paramB: 11,
    paramC: 0,
    paramD: 255,
  });

  const [backup, setBackup] = useState(_);

  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

  const setup = (p5, canvasParentRef) => {
    canvas = p5.createCanvas(300, 300).parent(canvasParentRef);
    // canvas.parent("artwork");
    p5.background(55);
    p5.rectMode(p5.CENTER);
    // p5.colorMode(p5.HSB);
  };

  const draw = (p5) => {
    p5.frameRate(7);

    if (saveImage) {
      p5.saveCanvas(canvas, "canvas.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.background(255, 20);
      p5.stroke(0);
      for (let i = 0; i < p5.width / 10; i++) {
        for (let j = 0; j < p5.width / 10; j++) {
          p5.strokeWeight(p5.random(0, _.paramA));

          let x = i * _.paramB + p5.random(0, 1);
          let y = j * _.paramB + p5.random(0, 1);
          let d = 10 + p5.random(0, _.paramC);

          let r = p5.map(i, 0, 15, 100, _.paramD);
          let g = p5.map(i, 0, 15, 100, _.paramD / 2);
          let b = p5.map(j, 0, 15, 100, _.paramD / 3);
          p5.fill(r, g, b);
          p5.fill(
            p5.random(0, _.paramD),
            p5.random(0, 255) / 2.5,
            p5.random(0, 255)
          );

          p5.rect(x, y, d, d);
        }
      }

      // p5.circle(p5.frameCount * 2, 100, 50);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mobile-editor-main">
      <header>
        {" "}
        <a onClick={handleBack}>back</a>
        <img
          src={Logo}
          alt="small white pixasso logo"
          className="mobile-logo"
        />
        <p style={{ color: "black" }}>back</p>
      </header>
      <h3>Algorithm: MobileAlgo</h3>
      <div className="mobile-canvas">
        <div className="artwork">
          <Sketch setup={setup} draw={draw} className="x" />
        </div>
        <div className="canvas-utilities">
          {/* <Refresh /> */}
          <button onClick={handleSaveImage}>Download</button>
          {/* <button onClick={uploadImage}>Save to Cloud</button> */}
          {/* <Save /> */}
          <StartStop />
        </div>
      </div>
      <div className="mobile-parameters">
        <div className="parameters-group">
          <Parameter
            name="paramA"
            value={_.paramA}
            id="Stroke"
            min=".1"
            max="10"
            step=".5"
            handleParameter={handleParameter}
          />
          <Parameter
            name="paramB"
            value={_.paramB}
            id="Spacing"
            min="10"
            max="50"
            step="0"
            handleParameter={handleParameter}
          />
          <Parameter
            name="paramC"
            value={_.paramC}
            id="Random Size"
            min="0"
            max="100"
            step="0"
            handleParameter={handleParameter}
          />
          <Parameter
            name="paramD"
            value={_.paramD}
            id="Color Balance"
            min="0"
            max="255"
            step="0"
            handleParameter={handleParameter}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorMobile;
