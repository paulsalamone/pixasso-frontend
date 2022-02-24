import React, { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import data from "../001_demo/algosData.json";

const Algo1 = (props) => {
  const [colors, setColors] = useContext(data.colors);
  const [stroke, setStroke] = useContext(data.stroke);

  const handleColors = ({ currentTarget: input }) => {
    setColors({ ...colors, [input.name]: input.value });
  };

  const handleStroke = ({ currentTarget: input }) => {
    setStroke({ ...stroke, [input.name]: input.value });
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  let XX = (top) => Math.floor(Math.random() * top);

  //   let x = 0;
  const draw = (p5) => {
    // p5.background(D);
    // p5.frameRate(10);
    // p5.strokeWeight(B);
    // p5.stroke(E);
    // for (let i = 0; i < p5.width / 10; i += 1) {
    //   for (let j = 0; j < p5.height / 10; j += 1) {
    //     let x = i * 50;
    //     let y = j * 50;
    //     let d = A;
    //     p5.shearX(p5.PI / F);
    //     let r = p5.map(i, 0, 7, 0, 255);
    //     let g = p5.map(i, 0, 7, 255, 0);
    //     let b = p5.map(j, 0, 7, 0, 255);
    //     p5.fill(r + D * i * j, g + D * i * j, b + D * i * j);
    //     // p5.fill(i * j * D);
    //     p5.square(x, y + XX(200), d + j * 10, C);
    //   }
    // }
    // p5.noLoop();
  };

  //   const draw = (p5) => {
  //     p5.background(10);
  //     p5.frameRate(10);
  //     p5.strokeWeight(B);
  //     p5.stroke(E);
  //     p5.translate(100);
  //     for (let i = 0; i < 100; i += 1) {
  //       for (let j = 0; j < 100; j += 1) {
  //         p5.fill(i * j * D, (i * j * D) / 2, (i * j * D) / 3);
  //         p5.square(i * A, j * A, A, C);
  //         x += D;
  //       }
  //     }
  //   };

  return (
    <>
      <div className="canvas-parameters">
        <Sketch setup={setup} draw={draw} />
        <div className="parameters-section">
          <div className="parameter">
            <label for="red">Red:</label>
            <input
              type="range"
              name="red"
              value={colors.red}
              min="0"
              max="255"
              onChange={handleColors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Algo1;

// import React, { useState, useEffect } from "react";
// import Sketch from "react-p5";

// const Algo1 = (props) => {
//   console.log("Props A = " + props.parameterA);
//   const [A, setA] = useState(10);
//   const [B, setB] = useState(1);
//   const [C, setC] = useState(0);
//   const [D, setD] = useState(10);
//   const [E, setE] = useState(0);

//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(700, 500).parent(canvasParentRef);
//   };

//   let x = 0;

//   const draw = (p5) => {
//     p5.background(10);
//     p5.frameRate(10);
//     p5.strokeWeight(B);
//     p5.stroke(E);
//     for (let i = 0; i < 100; i++) {
//       for (let j = 0; j < 100; j++) {
//         p5.fill(i * j * D, (i * j * D) / 2, (i * j * D) / 3);
//         p5.square(i * A, j * A, A, C);
//         x += D;
//       }
//     }
//   };

//   return (
//     <>
//       <div className="canvas-parameters">
//         <Sketch setup={setup} draw={draw} />
//         <div className="parameters">
//           <div className="parameter">
//             <p>A: box size</p>
//             <input
//               type="range"
//               value={A}
//               min="5"
//               max="100"
//               onChange={(e) => setA(parseInt(e.target.value))}
//             />
//           </div>
//           <div className="parameter">
//             <p>B: stroke weight</p>
//             <input
//               type="range"
//               value={B}
//               min="0"
//               max="30"
//               onChange={(e) => setB(parseInt(e.target.value))}
//             />
//           </div>
//           <div className="parameter">
//             <p>C: radius</p>
//             <input
//               type="range"
//               value={C}
//               min="0"
//               max="100"
//               onChange={(e) => setC(parseInt(e.target.value))}
//             />
//           </div>
//           <div className="parameter">
//             <p>D: shade</p>
//             <input
//               type="range"
//               value={D}
//               min="0"
//               max="50"
//               onChange={(e) => setD(parseInt(e.target.value))}
//             />
//           </div>
//           <div className="parameter">
//             <p>E: stroke color</p>
//             <input
//               type="range"
//               value={E}
//               min="0"
//               max="255"
//               onChange={(e) => setE(parseInt(e.target.value))}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Algo1;

// // OLD VERSIOn

// // import React, { useState, useEffect } from "react";
// // import Sketch from "react-p5";

// // const Algo1 = (props) => {
// //   console.log("Props A = " + props.parameterA);

// //   const setup = (p5, canvasParentRef) => {
// //     p5.createCanvas(500, 500).parent(canvasParentRef);
// //   };
// //   const draw = (p5) => {
// //     p5.background(10);
// //     p5.frameRate(10);

// //     for (let i = 0; i < p5.width / 10; i++) {
// //       for (let j = 0; j < p5.height / 10; j++) {
// //         p5.fill(i * 10 + j * 20);
// //         p5.square(i * props.parameterA, j * 10, 10);
// //         // p5.square(i * props.parameterA, j * props.parameterA, props.A);
// //       }
// //     }
// //   };

// //   return (
// //     <>
// //       <Sketch setup={setup} draw={draw} />
// //     </>
// //   );
// // };

// // export default Algo1;
