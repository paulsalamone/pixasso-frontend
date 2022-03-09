import React, { useState, useEffect, useContext } from "react";
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
import { UserContext } from "../../contexts/UserContext";
// import { uploadImage } from "./SaveToCloud";
import SaveToCloud from "../editorComponents/SaveToCloud";
import Download from "../editorComponents/Download";

const Algo1 = (props) => {
  //controls if p5 animation is running or not:
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  //const [imageFile, setImageFile] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const [saveImage, setSaveImage] = useState(false);

  let canvas = "";

  useEffect(() => {
    setStartStop({ ...startStop, start: true });
  }, []);

  //sets state of all parameters
  const [_, set_] = useState({
    sizeRange: 15,
    scale: 2,
    strokeWeight: 1,

    jiggle: 0,
    jiggle2: 0,
    strokeShade: 0,
    strokeOpacity: 0,

    red: 185,
    green: 185,
    blue: 185,

    spread: 0,
    K: 0,
    L: 0,
    BGhue: 270,
    BGsaturation: 82,
    BGbrightness: 20,
  });

  const [backup, setBackup] = useState(_);

  //handles all parameters:
  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  //when refresh is triggered, fills _ with backup state
  useEffect(() => {
    set_(backup);
    setRefresh(false);
  }, [refresh]);

  // START P5 ALGO:

  const setup = (p5, canvasParentRef) => {
    canvas = p5.createCanvas(800, 500).parent(canvasParentRef);
    canvas.parent("artwork");
    // p5.createCanvas(project.width, project.height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.frameRate(7);

    if (saveImage) {
      p5.saveCanvas(canvas, "canvas.png");
      console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.colorMode(p5.HSB);
      p5.background(_.BGhue, _.BGsaturation, _.BGbrightness, 50);
      p5.colorMode(p5.RGB);

      p5.stroke(_.strokeShade, _.strokeShade, _.strokeShade, 50);

      p5.translate(p5.width / 2, p5.height / 2);
      p5.scale(_.scale / 2);

      let jglX = p5.random(-_.jiggle, _.jiggle);
      let jglY = p5.random(-_.jiggle, _.jiggle);

      p5.translate(_.shake, _.randomSize);
      for (let i = 0; i < 30; i += 2) {
        let jglXX = p5.random(-_.jiggle2, _.jiggle2);
        let jglYY = p5.random(-_.jiggle2, _.jiggle2);

        p5.strokeWeight(p5.random(_.strokeWeight / 4, _.strokeWeight));

        p5.fill(
          p5.random(_.red - 100, _.red),
          p5.random(_.green - 100, _.green),
          p5.random(_.blue - 100, _.blue),
          50
        );
        psycheCircle(
          p5,
          _.spread,
          _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          -_.spread,
          _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          -_.spread,
          -_.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          _.spread,
          -_.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
        psycheCircle(
          p5,
          _.spread / _.spread,
          _.spread / _.spread,
          jglX,
          jglXX,
          jglY,
          jglYY,
          i,
          _.sizeRange
        );
      }
    }
  };
  const psycheCircle = (p5, x, y, jglX, jglXX, jglY, jglYY, i, sizeRange) => {
    return p5.circle(
      jglX + jglXX + x,
      jglY + jglYY + y,
      p5.width - i * 20 - p5.random(0, sizeRange)
    );
  };
  const uploadImageOLD = async () => {
    const image = document.getElementById("defaultCanvas0");
    image.toBlob(
      async (blob) => {
        const data = new FormData();
        data.append("file", blob);
        data.append("upload_preset", "sketch");
        data.append("cloud_name", "pixasso");
        //console.log(data)
        await fetch("https://api.cloudinary.com/v1_1/pixasso/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then(async (data) => {
            console.log(data.url);
            let url = data.url;
            // setImageUrl(data.url);
            await axios
              .post("http://localhost:4000/api/sketch/upload", {
                sketch_url: url,
              })
              .then((res) =>
                axios.put(`http://localhost:4000/api/users/${user.id}`, {
                  sketch_ids: res.data._id,
                })
              )
              .then((res) => console.log(res));
          })
          .catch((err) => console.log(err));

        // postData();
      },
      "image/jpeg",
      0.95
    );
  };

  return (
    <>
      <div className="canvas-with-parameters">
        <div className="parameters-left-1column">
          {/* <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Parameter />
            </div>
          </div> */}
          <div className="parameters-group">
            <h4>Background:</h4>
            <ParameterColor
              name="BGhue"
              value={_.BGhue}
              id="Hue"
              min="1"
              max="360"
              color="hue"
              step="0"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="BGsaturation"
              value={_.BGsaturation}
              id="Saturation"
              min="0"
              max="100"
              color="saturation"
              hue={_.BGhue}
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="BGbrightness"
              value={_.BGbrightness}
              id="Brightness"
              min="0"
              max="100"
              step="0"
              color="brightness"
              hue={_.BGhue}
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameter-group">
            <div style={{ opacity: "0" }}>
              <Parameter />
              <Parameter />
              <Parameter />
            </div>
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork" id="artwork">
            <Sketch setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <div>
              <Download setSaveImage={setSaveImage} />
              <SaveToCloud />
            </div>
            <div>
              <Refresh />

              <StartStop />
            </div>
          </div>
        </div>
        <div className="parameters-right">
          <div className="parameters-group">
            <h4>Sizing:</h4>
            <Parameter
              name="sizeRange"
              value={_.sizeRange}
              id="Size Range"
              min="1"
              max="500"
              step="0"
              handleParameter={handleParameter}
            />

            <Parameter
              name="jiggle"
              value={_.jiggle}
              id="Jiggle"
              min="0"
              max="100"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="jiggle2"
              value={_.jiggle2}
              id="Scramble"
              min="0"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Colors:</h4>
            <ParameterColor
              name="red"
              value={_.red}
              id="Red"
              min="0"
              max="255"
              step="0"
              color="red"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="green"
              value={_.green}
              id="Green"
              min="0"
              max="255"
              step="0"
              color="green"
              handleParameter={handleParameter}
            />
            <ParameterColor
              name="blue"
              value={_.blue}
              id="Blue"
              min="0"
              max="255"
              step="0"
              color="blue"
              handleParameter={handleParameter}
            />
          </div>
          <div className="parameters-group">
            <h4>Border:</h4>
            <Parameter
              name="strokeWeight"
              value={_.strokeWeight}
              id="Thickness"
              min="0"
              max="60"
              step="0"
              handleParameter={handleParameter}
            />

            <ParameterColor
              name="strokeShade"
              value={_.strokeShade}
              id="Shade"
              min="0"
              max="255"
              color="brightness"
              // step="0"
              handleParameter={handleParameter}
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
            <h4>Move:</h4>

            <Parameter
              name="scale"
              value={_.scale}
              id="Zoom"
              min="1"
              max="6"
              handleParameter={handleParameter}
            />
            <Parameter
              name="randomSize"
              value={_.randomSize}
              id="Up/Down"
              min="-200"
              max="200"
              step="0"
              handleParameter={handleParameter}
            />
            <Parameter
              name="shake"
              value={_.shake}
              id="Sideways"
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

export default Algo1;
