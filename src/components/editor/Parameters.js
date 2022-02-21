import { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
import { ParametersContext } from "../../contexts/ParametersContext";

const Parameters = () => {
  const [parameters, setParameters] = useContext(ParametersContext);

  const [allParameters, setAllParameters] = useContext(ParametersContext);

  console.log("000000000");
  console.log(parameters);
  console.log(allParameters);

  return (
    <div className="parameters">
      {/* {parameters.map((e) => {
        return <>{e}</>;
      })} */}
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
