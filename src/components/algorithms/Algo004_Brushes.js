import React, { useState, useEffect, useContext } from "react";
import ParameterBrush from "../editorComponents/ParameterBrush";
import SketchHost from "./SketchHost";
import { StartStopContext } from "../../contexts/StartStopContext";
import { RefreshContext } from "../../contexts/RefreshContext";
import Upload from "../editorComponents/Upload";
import Parameter from "../editorComponents/Parameter";
import { BrushContext } from "../../contexts/BrushContext";
import { BackgroundContext } from "../../contexts/BackgroundContext";
import { RgbaColorPicker } from "react-colorful";
import BrushSize from "../editorComponents/BrushSize";
import SaveToCloud from "../editorComponents/SaveToCloud";
import WipeScreen from "../editorComponents/WipeScreen";
import Download from "../editorComponents/Download";

//RINGS
let ring, angle, step;

const Algo4 = () => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useState(false);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [brushChoice, setBrushChoice] = useContext(BrushContext);
  const [background, setBackground] = useContext(BackgroundContext);
  const [color, setColor] = useState({
    r: 255,
    g: 0,
    b: 0,
    a: 1,
  });

  console.log(color.r);
  console.log(color.g);
  console.log(color.b);
  console.log(color.a);
  console.log(color);
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

    brushSize: 15,
    brushSizeSettings: {
      name: "brushSize",
      id: "Brush Size",
      min: 3,
      max: 40,
    },
  });
  const [backup, setBackup] = useState(_);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    setStartStop({ ...startStop, start: true });
  }, []);

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

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef);
    p5.background(255);

    // p5.colorMode(p5.HSB, 360, 100, 100, 10);
    p5.colorMode(p5.RGB);
    p5.loadImage(background, (img) => {
      p5.image(img, 0, 0);
      console.log("Background image:" + img);
    });

    //RINGS
    ring = 30;
    angle = 0;
    step = p5.TWO_PI / 18;
  };

  console.log(brushChoice);

  function draw(p5) {
    let alphaNum = p5.map(color.a, 0, 1, 0, 255);

    p5.frameRate(60);
    if (saveImage) {
      p5.save("PIXASSO.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (p5.mouseIsPressed) {
      if (brushChoice === "default") {
        p5.stroke(color.r, color.g, color.b, alphaNum);

        p5.strokeWeight(_.brushSize);
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      }

      if (brushChoice === "pixel") {
        p5.rectMode(p5.CENTER);
        p5.fill(
          color.r + p5.random(20),
          color.g + p5.random(20),
          color.b + p5.random(20),
          alphaNum
        );

        p5.noStroke();
        p5.rect(p5.mouseX, p5.mouseY, _.brushSize);
        p5.rect(
          p5.mouseX + p5.random(-_.brushSize, _.brushSize),
          p5.mouseY + p5.random(-_.brushSize, _.brushSize),
          _.brushSize / 2
        );
        p5.fill(
          color.r + p5.random(20),
          color.g + p5.random(20),
          color.b + p5.random(20),
          alphaNum - 120
        );
        p5.rect(
          p5.mouseX + p5.random(-_.brushSize * 2, _.brushSize * 2),
          p5.mouseY + p5.random(-_.brushSize * 2, _.brushSize * 2),
          _.brushSize / 4
        );
        p5.rect(
          p5.mouseX + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.mouseY + p5.random(-_.brushSize * 3, _.brushSize * 3),
          _.brushSize / 8
        );
      }

      if (brushChoice === "hairy") {
        // pen(p5);

        p5.stroke(
          color.r + p5.random(20),
          color.g + p5.random(20),
          color.b + p5.random(20),
          alphaNum
        );
        p5.strokeWeight(_.brushSize);
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        p5.strokeWeight(_.brushSize / 3);
        p5.line(
          p5.mouseX + p5.random(-_.brushSize * 1.5, _.brushSize * 1.5),
          p5.mouseY + p5.random(-_.brushSize * 1.5, _.brushSize * 1.5),
          p5.pmouseX,
          p5.pmouseY
        );
        p5.strokeWeight(_.brushSize / 5);
        p5.line(
          p5.mouseX + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.mouseY + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.pmouseX,
          p5.pmouseY
        );
      }

      if (brushChoice === "block") {
        p5.noStroke();
        p5.rectMode(p5.CENTER);
        p5.fill(color.r, color.g, color.b, alphaNum);
        p5.rect(p5.mouseX, p5.mouseY, _.brushSize * 6);
      }

      if (brushChoice === "rings") {
        p5.noStroke();
        p5.fill(color.r, color.g, color.b, alphaNum);
        // p5.circle(p5.mouseX, p5.mouseY, _.brushSize);

        let x = ring * p5.sin(angle);
        let y = ring * p5.cos(angle);
        p5.ellipse(p5.mouseX + x, p5.mouseY + y, _.brushSize);
        angle = angle + step;
      }

      if (brushChoice === "twigs") {
        p5.stroke(color.r, color.g, color.b, alphaNum);
        p5.strokeWeight(p5.random(_.brushSize / 4, _.brushSize / 7));

        p5.line(
          p5.mouseX + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.mouseY + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.mouseX + p5.random(-_.brushSize * 3, _.brushSize * 3),
          p5.mouseY + p5.random(-_.brushSize * 3, _.brushSize * 3)
        );
      }
      if (brushChoice === "shadow") {
        // p5.stroke(color.r, color.g, color.b, color.a);

        p5.strokeWeight(_.brushSize);
        p5.stroke(0);
        p5.line(
          p5.mouseX - 10,
          p5.mouseY + 10,
          p5.pmouseX - 10,
          p5.pmouseY + 10
        );
        p5.stroke(color.r, color.g, color.b, alphaNum);
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        p5.stroke(0, alphaNum);
        p5.strokeWeight(_.brushSize / 4);
        p5.line(p5.mouseX + 5, p5.mouseY - 5, p5.pmouseX + 5, p5.pmouseY - 5);
        p5.stroke(255, alphaNum);

        p5.strokeWeight(_.brushSize / 6);
        p5.line(p5.mouseX + 1, p5.mouseY - 1, p5.pmouseX + 1, p5.pmouseY - 1);
      }

      if (brushChoice === "smudge") {
        p5.strokeWeight(_.brushSize);
        for (let i = 0; i < 200; i++) {
          p5.stroke(
            color.r + p5.random(60),
            color.g + p5.random(60),
            color.b + p5.random(60),
            alphaNum / 20
          );
          p5.line(
            p5.mouseX + p5.random(-_.brushSize / 4, _.brushSize / 4),
            p5.mouseY + p5.random(-_.brushSize / 4, _.brushSize / 4),
            p5.pmouseX + p5.random(-_.brushSize / 4, _.brushSize / 4),
            p5.pmouseY + p5.random(-_.brushSize / 4, _.brushSize / 4)
          );
        }
      }
    }
  }

  return (
    <div className="canvas-with-parameters">
      <div className="parameters-left-1column">
        <div className="parameters-group">
          <h4>Choose Brush:</h4>
          <div className="parameter">
            <ParameterBrush name="default" id="default" value="default" />
            <ParameterBrush name="pixel" id="pixel" value="pixel" />
            <ParameterBrush name="hairy" id="hairy" value="hairy" />
            <ParameterBrush name="block" id="block" value="block" />
            <ParameterBrush name="rings" id="rings" value="rings" />
            <ParameterBrush name="twigs" id="twigs" value="twigs" />
            <ParameterBrush name="shadow" id="shadow" value="shadow" />
            <ParameterBrush name="smudge" id="smudge" value="smudge" />
          </div>
        </div>
        <div>
          <Upload />
        </div>
      </div>

      <div className="canvas-container">
        <div className="artwork">
          <SketchHost wipe={wipe} className="x" setup={setup} draw={draw} />
        </div>
        <div className="canvas-utilities">
          <div>
            <Download setSaveImage={setSaveImage} />
            <SaveToCloud />
          </div>
          <div>
            <WipeScreen wipe={wipe} setWipe={setWipe} />
          </div>
        </div>
      </div>

      <div className="parameters-right">
        {console.log(color)}

        <div className="parameters-group">
          <div className="color-picker ">
            {/* <HexColorPicker color={color} onChange={setColor} /> */}
            <h4>Brush Color:</h4>

            <RgbaColorPicker color={color} onChange={setColor} />
            {console.log(color)}
          </div>
        </div>
        <div className="parameters-group" style={{ opacity: "0.0" }}>
          <h4>xxx</h4>

          <Parameter />
        </div>
        <div className="parameters-group">
          <h4>Brush Settings:</h4>
          <BrushSize size={_.brushSize} />
          {_.brushSizeSettings.value}
          <Parameter
            name={_.brushSizeSettings.name}
            value={_.brushSizeSettings.value}
            id={_.brushSizeSettings.id}
            min={_.brushSizeSettings.min}
            max={_.brushSizeSettings.max}
            step="0"
            handleParameter={handleParameter}
          />
        </div>
      </div>
    </div>
  );
};

export default Algo4;
