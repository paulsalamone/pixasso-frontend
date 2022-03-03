import React, { useState, useEffect, useContext } from "react";
import ParameterBrush from "../editorComponents/ParameterBrush";

import Sketch from "react-p5";
import loadImage from "react-p5";
import Algo3Sketch from "./Algo3Sketch";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import { SaveContext } from "../../contexts/SaveContext";
import Save from "../editorComponents/Save";
import { RefreshContext } from "../../contexts/RefreshContext";
import Refresh from "../editorComponents/Refresh";
import Upload from "../editorComponents/Upload";
import Parameter from "../editorComponents/Parameter";
import { BrushContext } from "../../contexts/BrushContext";

const Algo4 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [brushChoice, setBrushChoice] = useContext(BrushContext);
  // const [brush, setBrush] = useState("default");
  const [_, set_] = useState({
    BGhue: 180,
    BGhueSettings: { name: "BGhue", id: "Hue", min: 0, max: 360 },
    BGsaturation: 50,
    BGsaturationSettings: {
      name: "BGsaturation",
      id: "Saturation",
      min: 0,
      max: 100,
    },
    BGbrightness: 95,
    BGbrightnessSettings: {
      name: "BGbrightness",
      id: "Brightness",
      min: 0,
      max: 100,
    },

    red: 185,
    redSettings: { name: "red", id: "Red", min: 10, max: 235 },
    green: 185,
    greenSettings: { name: "green", id: "Green", min: 10, max: 235 },
    blue: 185,
    blueSettings: { name: "blue", id: "Blue", min: 10, max: 235 },

    brushSize: 20,
    brushSizeSettings: {
      name: "brushSize",
      id: "Brush Size",
      min: 2,
      max: 70,
    },
  });
  const [backup, setBackup] = useState(_);
  const [wipe, setWipe] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

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

  //HALO:
  let r, angle, step;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
    p5.background(255);
    p5.colorMode(p5.HSB, 360, 100, 100, 10);

    // HALO:
    r = 20;
    angle = 0;
    step = p5.TWO_PI / 20;
  };

  function draw(p5) {
    p5.frameRate(60);

    if (saveImage === true) {
      p5.save("PIXASSO.png");
      setSaveImage(false);
    }

    // AGING LOOP
    if (startStop.start) {
      // p5.fill(220, 4);
      //   p5.noFill();
      //   p5.strokeWeight(0.5);
      //   p5.stroke(30, 100, 100, 1);
      //   p5.circle(p5.random(p5.width), p5.random(p5.height), p5.random(300));
    }
    // p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 1);
    // p5.background(230, 0.5);

    // halo(p5);
    if (p5.mouseIsPressed) {
      pen(p5);

      // if (brushChoice === "default") {
      //   p5.stroke(0);
      //   p5.fill(_.red, _.green, _.blue);
      //   p5.circle(p5.mouseX, p5.mouseY, _.brushSize);
      //   p5.circle(p5.mouseX, p5.mouseY, _.brushSize - 5);
      //   p5.circle(p5.mouseX, p5.mouseY, _.brushSize - 10);
      //   p5.circle(p5.mouseX, p5.mouseY, _.brushSize - 15);
      // }

      if (brushChoice === "dragon") {
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.fill("black");
        p5.circle(p5.mouseX, p5.mouseY, 30);
        p5.fill("white");
        p5.circle(p5.mouseX - 4, p5.mouseY - 4, 30);
        p5.fill("black");
        p5.circle(p5.mouseX + 12, p5.mouseY + 12, 20);
        p5.fill("white");
        p5.circle(p5.mouseX + 12 - 4, p5.mouseY + 12 - 4, 20);
        p5.fill("black");
        p5.circle(p5.mouseX - 9, p5.mouseY - 9, 8);
        p5.fill("white");
        p5.circle(p5.mouseX - 11, p5.mouseY - 11, 8);
      }

      // }
    }

    // }
  }

  function halo(p5) {
    p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness);
    p5.strokeWeight(_.brushSize);

    p5.translate(p5.mouseX, p5.mouseY);
    let x = r * p5.sin(angle);
    let y = r * p5.cos(angle);
    p5.fill(0, 0, 0);
    p5.ellipse(x, y, 2);
    // p5.line(p5.mouseX + 10, p5.mouseY - 10, p5.pmouseX, p5.pmouseY);

    // p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    //increase angle by step size
    angle = angle + step;
  }

  function pen(p5) {
    // set the color and weight of the stroke

    // p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness, 1);
    // p5.strokeWeight(_.brushSize);
    // p5.line(p5.mouseX + 10, p5.mouseY - 10, p5.pmouseX, p5.pmouseY);

    // p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness, 2);
    // p5.strokeWeight(_.brushSize);
    // p5.line(p5.mouseX - 5, p5.mouseY + 5, p5.pmouseX, p5.pmouseY);

    // p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness, 255);
    // p5.strokeWeight(_.brushSize - 5);
    // p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness);
    p5.strokeWeight(_.brushSize / 2);
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    p5.line(p5.mouseX + 30, p5.mouseY + 30, p5.pmouseX + 30, p5.pmouseY + 30);

    p5.stroke("black");
    hairy(p5, 5, 10);
    hairy(p5, 10, 10);
    hairy(p5, 20, 20);
  }

  function hairy(p5, weight, rand) {
    p5.strokeWeight(_.brushSize / weight);

    p5.line(
      p5.mouseX + p5.random(-rand, rand),
      p5.mouseY + p5.random(-rand, rand),
      p5.pmouseX + p5.random(-rand, rand),
      p5.pmouseY + p5.random(-rand, rand)
    );

    p5.fill("red");
    // p5.noStroke();
    p5.square(
      p5.mouseX + p5.random(-rand * 3, rand * 3),
      p5.mouseY + p5.random(-rand * 3, rand * 3),
      p5.random(_.brushSize / 8)
    );
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
          <div className="parameters-group">
            <h4>BackGround Color:</h4>
            <Parameter
              name={_.BGhueSettings.name}
              value={_.BGhue}
              id={_.BGhueSettings.id}
              min={_.BGhueSettings.min}
              max={_.BGhueSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name={_.BGsaturationSettings.name}
              value={_.BGsaturation}
              id={_.BGsaturationSettings.id}
              min={_.BGsaturationSettings.min}
              max={_.BGsaturationSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name={_.BGbrightnessSettings.name}
              value={_.BGbrightness}
              id={_.BGbrightnessSettings.id}
              min={_.BGbrightnessSettings.min}
              max={_.BGbrightnessSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            <Algo3Sketch wipe={wipe} className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <button onClick={handleWipe}>Wipe Screen</button>
            {/* <Refresh /> */}
            <Save />
            {/* <StartStop /> */}
          </div>
        </div>

        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Choose Brush:</h4>
            <div className="parameter">
              <ParameterBrush name="default" id="default" value="default" />
              <ParameterBrush name="dragon" id="dragon" value="dragon" />
              {/* <ParameterBrush />
            <ParameterBrush /> */}
            </div>
          </div>
          <div className="parameters-group">
            <h4>Brush Settings:</h4>
            <Parameter
              name={_.brushSizeSettings.name}
              value={_.brushSize}
              id={_.brushSizeSettings.id}
              min={_.brushSizeSettings.min}
              max={_.brushSizeSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
          </div>

          <div className="parameters-group">
            <h4>Color:</h4>
            <Parameter
              name={_.redSettings.name}
              value={_.red}
              id={_.redSettings.id}
              min={_.redSettings.min}
              max={_.redSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name={_.greenSettings.name}
              value={_.green}
              id={_.greenSettings.id}
              min={_.greenSettings.min}
              max={_.greenSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name={_.blueSettings.name}
              value={_.blue}
              id={_.blueSettings.id}
              min={_.blueSettings.min}
              max={_.blueSettings.max}
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
