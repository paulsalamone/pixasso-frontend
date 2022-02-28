import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import Parameter from "../editorComponents/Parameter";
import { StartStopContext } from "../../contexts/StartStopContext";
import { SaveContext } from "../../contexts/SaveContext";
import { AlgoContext } from "../../contexts/AlgoContext";
import Save from "../editorComponents/Save";
import StartStop from "../editorComponents/StartStop";
import allAlgoParameters from "../algorithms/parameterData.json";

const AlgoFrame = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [algo, setAlgo] = useContext(AlgoContext);

  const [saveImage, setSaveImage] = useContext(SaveContext);
  console.log(algo);
  const [_, set_] = useState({});

  // convert data into array
  const allParametersArray = Object.entries(allAlgoParameters);

  //find object that matches algo choice:

  for (let i = 0; i < allParametersArray.length; i++) {
    if (allParametersArray[i][0] === algo) {
      console.log("match!" + algo);
      set_({});
      break;
    }
    console.log("sorry no match");
  }
  //   useEffect(()=>{
  // 	  set(parameters {

  // 	  })
  //   })
  //     //   NOTE: set to state so MULTIPLE algos can use this page!
  //   A: {
  //     name: parameters.Algo3.A.name,
  //     id: parameters.Algo3.A.id,
  //     value: parameters.Algo3.A.value,
  //     min: parameters.Algo3.A.min,
  //     max: parameters.Algo3.A.max,
  //   },
  //   B: {
  //     name: parameters.Algo3.B.name,
  //     id: parameters.Algo3.B.id,
  //     value: parameters.Algo3.B.value,
  //     min: parameters.Algo3.B.min,
  //     max: parameters.Algo3.B.max,
  //   },
  //   });

  //   console.log("parameters state:");
  //   console.log(_);

  //   const paramArray = Object.entries(parameters.Algo3);
  //   console.log("param array:");
  //   console.log(paramArray);

  // SAVE IMAGE

  // PARAMETER STATES
  // here import parameter states based on...
  //handles all parameters:
  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  //////////// START P5 ALGO ////////////
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.frameRate(7);
    p5.background(0);
    if (saveImage) {
      p5.save("output_canvas.png");
      //   console.log("p5 save image triggered");
      setSaveImage(false);
    }

    if (startStop.start) {
      p5.circle(50, 50, 100);
    }
  };

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
            <h4>parameterStatus:</h4>
            {/* {paramArray.map((e) => {
              //   console.log("map: ");
              //   console.log(e);
              //   console.log(e[1].name);
              return (
                <Parameter
                  name={e[1].name}
                  id={e[1].id}
                  value={e[1].value}
                  min={e[1].min}
                  max={e[1].max}
                  handleParameter={handleParameter}
                />
              );
            })} */}
            {/* <Parameter
                name={}
                value={}
                id={}
                min={}
                max={}
              handleParameter={handleParameter}
            /> */}
          </div>
        </div>

        <div className="canvas-container">
          <div className="artwork">
            <Sketch className="x" setup={setup} draw={draw} />
          </div>
          <div className="canvas-utilities">
            <Save />

            <StartStop />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgoFrame;
