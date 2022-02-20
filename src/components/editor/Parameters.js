import { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import { ParametersContext } from "../../contexts/ParametersContext";

const Parameters = () => {
  const [parameters, setParameters] = useContext(ParametersContext);

  return (
    <div className="parameters">
      <h2>Parameters</h2>
      {Object.keys(parameters).map((e, index) => {
        return (
          <>
            <p>{parameters[`parameter${index + 1}`].name}</p>
            <input
              type="range"
              min={parameters[`parameter${index + 1}`].min}
              max={parameters[`parameter${index + 1}`].max}
              onChange={(e) =>
                (parameters[`parameter${index + 1}`].set = e.target.value)
              }
            />
            <p>Value: {parameters[`parameter${index + 1}`].value}</p>
            <br />
          </>
        );
      })}
      {/* {parameters !== {} ? (
        parameters.map((e) => {
          return (
            <>
              <p>{e.name}</p>
            </>
          );
        })
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default Parameters;

// OLD VERSION!

// import { useState, useEffect } from "react";
// import Sketch from "react-p5";

// const Parameters = () => {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);
//   const [c, setC] = useState(0);

//   const [d, setD] = useState(0);
//   const [e, setE] = useState(0);
//   const [f, setF] = useState(0);

//   const [g, setG] = useState(0);
//   const [h, setH] = useState(0);
//   const [aa, setAA] = useState(0);

//   return (
//     <div className="parameters">
//       <h2>Parameters</h2>
//       <div>
//         <p>Parameter A</p>
//         <input
//           type="range"
//           min="0"
//           max="20"
//           onChange={(e) => setA(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Parameters;
