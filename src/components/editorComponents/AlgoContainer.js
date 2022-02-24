import { useState, useEffect } from "react";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";
import Nests from "../algorithms/001_Nests";

const Canvas = (props) => {
  const [algoChoice, setAlgoChoice] = useState(<Algo1 />);

  useEffect(() => {
    switch (props.state.algoSelection) {
      case "algo1":
        setAlgoChoice(<Algo1 />);
        break;
      case "algo2":
        setAlgoChoice(<Algo2 />);
        break;
      case "nests":
        setAlgoChoice(<Nests />);
        break;
      default:
        console.log("error");
    }
    // console.log(algoChoice);
  }, [props.state.algoSelection]);

  return (
    <>
      <div className="canvas-frame">
        <div className="sketch">{algoChoice}</div>
      </div>
    </>
  );
};

export default Canvas;
