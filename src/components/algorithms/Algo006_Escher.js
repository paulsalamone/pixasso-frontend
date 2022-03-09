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
import WipeScreen from "../editorComponents/WipeScreen";
import Download from "../editorComponents/Download";

let r, g, b;
let c1, c2;
let hue, saturation, brightness;
let gradStart, gradEnd;

const Algo6 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [_, set_] = useState({
    BGred: 90,
    BGgreen: 75,
    BGblue: 65,
    Asize: 100,
    Bsize: 45,
    Csize: 5,
    horizA: 2,
    horizB: 3,
    horizC: 4,
    vertA: 2,
    vertB: 3,
    vertC: 4,
    stretchHoriz: 1,
    stretchVert: 1,
    stretchDiag: 1,
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
    // setRefresh(true);
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
      // p5.background(0, 0, 0, 10);
      p5.background(_.BGred, _.BGgreen, _.BGblue, 10);

      // CLOUDS A
      for (let i = 0; i < 2000; i++) {
        step(
          p5,
          _.Asize,
          _.horizA,
          _.vertA,
          _.stretchHoriz,
          _.stretchVert,
          _.stretchDiag
        );
      }
      // CLOUDS B
      for (let i = 0; i < 2000; i++) {
        step(
          p5,
          _.Bsize,
          _.horizB,
          _.vertB,
          _.stretchHoriz,
          _.stretchVert,
          _.stretchDiag
        );
      }
      // CLOUDS C
      for (let i = 0; i < 2000; i++) {
        step(
          p5,
          _.Csize,
          _.horizC,
          _.vertC,
          _.stretchHoriz,
          _.stretchVert,
          _.stretchDiag
        );
      }
    }
  }

  function step(p5, size, horiz, vert, stretchH, stretchV, stretchD) {
    if (startStop.start) {
      x += p5.random(-horiz, horiz);
      y += p5.random(-vert, vert);
      x = p5.constrain(x, 0, p5.width);
      y = p5.constrain(y, 0, p5.height);

      //SHADOW
      p5.noStroke();
      p5.fill(0, 5);
      p5.rect(x - 10, y + 10, size / stretchV, size / stretchH);
      //HIGHLIGHT
      p5.noStroke();
      p5.fill(255, 30);
      p5.rect(x + 3, y - 3, size / stretchV, size / stretchH);
      //BLOCK
      p5.strokeWeight(1);
      p5.stroke(0, 80);
      p5.fill(255, 70);
      p5.rect(x, y, size / stretchV, size / stretchH);
    }
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
          <div className="parameters-group">
            <h4>Tint:</h4>
            <ParameterColor
              name="BGred"
              value={_.BGred}
              id="Red"
              min="1"
              max="140"
              step="0"
              color="red"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="BGgreen"
              value={_.BGgreen}
              id="Green"
              min="1"
              max="140"
              step="0"
              color="green"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="BGblue"
              value={_.BGblue}
              id="Blue"
              min="1"
              max="140"
              step="0"
              color="blue"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Box Shape:</h4>
            <Parameter
              name="stretchHoriz"
              value={_.stretchHoriz}
              id="Width"
              min="1"
              max="40"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="stretchVert"
              value={_.stretchVert}
              id="Height"
              min="1"
              max="40"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            <SketchHost wipe={wipe} className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <div>
              <Download />
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
            <h4>Big Boxes:</h4>
            <Parameter
              name="Asize"
              value={_.Asize}
              id="Size"
              min="50"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="horizA"
              value={_.horizA}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="vertA"
              value={_.vertA}
              id="Vertical"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
          </div>

          <div className="parameters-group">
            <h4>Medium Boxes:</h4>

            <Parameter
              name="Bsize"
              value={_.Bsize}
              id="Size"
              min="25"
              max="60"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="horizB"
              value={_.horizB}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="vertB"
              value={_.vertB}
              id="Vertical"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Small Boxes:</h4>
            <Parameter
              name="Csize"
              value={_.Csize}
              id="Size"
              min="1"
              max="10"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="horizC"
              value={_.horizC}
              id="Horizontal"
              min="0"
              max="20"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="vertC"
              value={_.vertC}
              id="Vertical"
              min="0"
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

export default Algo6;
