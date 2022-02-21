import { useState, useEffect } from "react";
import Algo1 from "../../algorithms/001_demo/Algo1";
import Algo2 from "../../algorithms/001_demo/Algo2";

const Canvas = (props) => {
  const [algoChoice, setAlgoChoice] = useState(
    <Algo1
      formatWidth={props.state.formatWidth}
      formatHeight={props.state.formatHeight}
      BGcolor={props.state.BGcolor}
    />
  );
  useEffect(() => {
    switch (props.state.algoSelection) {
      case "algo1":
        setAlgoChoice(
          <Algo1
            formatWidth={props.state.formatWidth}
            formatHeight={props.state.formatHeight}
            BGcolor={props.state.BGcolor}
            parameterA={props.state.parameterA}
          />
        );
        break;
      case "algo2":
        setAlgoChoice(
          <Algo2
            formatWidth={props.state.formatWidth}
            formatHeight={props.state.formatHeight}
            BGcolor={props.state.BGcolor}
            parameterA={props.state.parameterA}
          />
        );
        break;
      default:
        console.log("error");
    }
    console.log(algoChoice);
  }, [props.state.algoSelection]);

  return (
    <>
      <div className="canvas-frame">
        <div
          className="sketch"
          // style={{
          //   width: `${props.state.formatWidth}px`,
          //   height: `${props.state.formatHeight}px`,
          //   backgroundColor: `${props.state.BGcolor}`,
          // }}
        >
          {algoChoice}
        </div>
      </div>
    </>
  );
};

export default Canvas;
