import React, { useState, useEffect, useContext } from "react";
import ParameterBrush from "../editorComponents/ParameterBrush";
import Sketch from "react-p5";
import SketchHost from "./SketchHost";
import { StartStopContext } from "../../contexts/StartStopContext";
import StartStop from "../editorComponents/StartStop";
import { SaveContext } from "../../contexts/SaveContext";
import Save from "../editorComponents/Save";
import { RefreshContext } from "../../contexts/RefreshContext";
import Upload from "../editorComponents/Upload";
import Parameter from "../editorComponents/Parameter";
import { BrushContext } from "../../contexts/BrushContext";
import { BackgroundContext } from "../../contexts/BackgroundContext";
import { HexColorPicker } from "react-colorful";
import { ChromePicker } from "react-color";

const Algo4 = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [saveImage, setSaveImage] = useContext(SaveContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [brushChoice, setBrushChoice] = useContext(BrushContext);
  const [background, setBackground] = useContext(BackgroundContext);
  const [color, setColor] = useState("#aabbcc");

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
      min: 1,
      max: 30,
    },
  });
  const [backup, setBackup] = useState(_);
  const [wipe, setWipe] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

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

    p5.loadImage(background, (img) => {
      p5.image(img, 0, 0);
      console.log("Background image:" + img);
    });

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

    if (p5.mouseIsPressed) {
      if (brushChoice === "default") {
        p5.stroke(color);
        p5.strokeWeight(_.brushSize);
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      }

      if (brushChoice === "pixel") {
        pixelBrush(p5, 20);
        pixelBrush(p5, 1);
      }

      if (brushChoice === "hairy") {
        // pen(p5);
        hairyBrush(p5);
      }
    }
  }

  function hairyBrush(p5) {
    p5.stroke(_.BGhue, _.BGsaturation, _.BGbrightness);
    p5.strokeWeight(_.brushSize / 2);
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    // p5.line(p5.mouseX + 30, p5.mouseY + 30, p5.pmouseX + 30, p5.pmouseY + 30);

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

    // p5.fill("red");
    // p5.noStroke();
  }

  function pixelBrush(p5, rand) {
    p5.fill(color, 2);
    p5.noStroke();
    p5.square(p5.mouseX, p5.mouseY, _.brushSize);
    let spray = _.brushSize * 3;
    p5.fill(color);

    p5.square(
      p5.mouseX + p5.random(-spray, spray),
      p5.mouseY + p5.random(-spray, spray),
      _.brushSize / 4
    );
    // p5.square(
    //   p5.mouseX + p5.random(-rand * 3, rand * 3),
    //   p5.mouseY + p5.random(-rand * 3, rand * 3),
    //   p5.random(_.brushSize / 8)
    // );
  }

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
          {/* <div className="parameters-group">
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
          </div> */}
          <div className="parameters-group">
            <h4>Choose Brush:</h4>
            <div className="parameter">
              <ParameterBrush name="default" id="default" value="default" />
              <ParameterBrush name="pixel" id="pixel" value="pixel" />
              <ParameterBrush name="hairy" id="hairy" value="hairy" />
            </div>
          </div>
          <div>
            <Upload />
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            {/* <img src={background} /> */}
            {/* <img src={StaticImage} alt="static image"></img> */}
            <SketchHost
              // preload={preload}
              wipe={wipe}
              className="x"
              setup={setup}
              draw={draw}
            />

            {/* <Sketch setup={setup} draw={draw} /> */}
          </div>
          <div className="canvas-utilities">
            <button onClick={handleWipe}>Wipe Screen</button>
            {/* <Refresh /> */}
            <Save />
            {/* <StartStop /> */}
          </div>
        </div>

        <div className="parameters-right-1col">
          <HexColorPicker color={color} onChange={setColor} />
          {console.log(color)}
          {/* <ChromePicker /> */}
          <div className="parameters-group">
            <h4>Brush Settings:</h4>
            <Parameter
              name={_.brushSizeSettings.name}
              value={_.brushSizeSettings.value}
              id={_.brushSizeSettings.id}
              min={_.brushSizeSettings.min}
              max={_.brushSizeSettings.max}
              step="0"
              handleParameter={handleParameter}
            />
            {/* <Parameter
              name="transparency"
              id="Transparency"
              value="0"
              step="0"
              handleParameter={handleParameter}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo4;
