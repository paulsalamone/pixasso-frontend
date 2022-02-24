import { useState, useEffect } from "react";
import Algo1 from "../../algorithms/001_demo/Algo1";
import Algo2 from "../../algorithms/001_demo/Algo2";

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
