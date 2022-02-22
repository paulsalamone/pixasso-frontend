import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

const Algo1 = (props) => {
  console.log("Props A = " + props.parameterA);
  const [A, setA] = useState(10);
  const [B, setB] = useState(1);
  const [C, setC] = useState(0);
  const [D, setD] = useState(10);
  const [E, setE] = useState(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(700, 500).parent(canvasParentRef);
  };

  let x = 0;

  const draw = (p5) => {
    p5.background(10);
    p5.frameRate(10);
    p5.strokeWeight(B);
    p5.stroke(E);
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        p5.fill(i * j * D, (i * j * D) / 2, (i * j * D) / 3);
        p5.square(i * A, j * A, A, C);
        x += D;
      }
    }
  };

  return (
    <>
      <div className="canvas-parameters">
        <Sketch setup={setup} draw={draw} />
        <div className="parameters">
          <div className="parameter">
            <p>A: box size</p>
            <input
              type="range"
              value={A}
              min="5"
              max="100"
              onChange={(e) => setA(parseInt(e.target.value))}
            />
          </div>
          <div className="parameter">
            <p>B: stroke weight</p>
            <input
              type="range"
              value={B}
              min="0"
              max="30"
              onChange={(e) => setB(parseInt(e.target.value))}
            />
          </div>
          <div className="parameter">
            <p>C: radius</p>
            <input
              type="range"
              value={C}
              min="0"
              max="100"
              onChange={(e) => setC(parseInt(e.target.value))}
            />
          </div>
          <div className="parameter">
            <p>D: shade</p>
            <input
              type="range"
              value={D}
              min="0"
              max="50"
              onChange={(e) => setD(parseInt(e.target.value))}
            />
          </div>
          <div className="parameter">
            <p>E: stroke color</p>
            <input
              type="range"
              value={E}
              min="0"
              max="255"
              onChange={(e) => setE(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo1;

// OLD VERSIOn

// import React, { useState, useEffect } from "react";
// import Sketch from "react-p5";

// const Algo1 = (props) => {
//   console.log("Props A = " + props.parameterA);

//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(500, 500).parent(canvasParentRef);
//   };
//   const draw = (p5) => {
//     p5.background(10);
//     p5.frameRate(10);

//     for (let i = 0; i < p5.width / 10; i++) {
//       for (let j = 0; j < p5.height / 10; j++) {
//         p5.fill(i * 10 + j * 20);
//         p5.square(i * props.parameterA, j * 10, 10);
//         // p5.square(i * props.parameterA, j * props.parameterA, props.A);
//       }
//     }
//   };

//   return (
//     <>
//       <Sketch setup={setup} draw={draw} />
//     </>
//   );
// };

// export default Algo1;
