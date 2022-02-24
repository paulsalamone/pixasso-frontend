import { useState, useEffect, useContext } from "react";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";
import Nests from "../algorithms/001_Nests";
import { ProjectContext } from "../../contexts/ProjectContext";
import { AlgoContext } from "../../contexts/AlgoContext";

const Canvas = (props) => {
  const [project, setProject] = useContext(ProjectContext);
  const [algo, setAlgo] = useContext(AlgoContext);
  const [algoChoice, setAlgoChoice] = useState(<Algo1 />);

  useEffect(() => {
    switch (algo) {
      case "Algo1":
        setAlgoChoice(<Algo1 />);
        break;
      case "Algo2":
        setAlgoChoice(<Algo2 />);
        break;
      case "Nests":
        setAlgoChoice(<Nests />);
        break;
      default:
        console.log("error");
    }
    // setProject({ ...project, refresh: false });
    // console.log("use effect refreshes");
  }, [algo]);

  // setProject({ ...project });

  // useEffect(() => {
  //   switch (props.state.algoSelection) {
  //     case "algo1":
  //       setAlgoChoice(<Algo1 />);
  //       break;
  //     case "algo2":
  //       setAlgoChoice(<Algo2 />);
  //       break;
  //     case "nests":
  //       setAlgoChoice(<Nests />);
  //       break;
  //     default:
  //       console.log("error");
  //   }
  //   // console.log(algoChoice);
  // }, [props.state.algoSelection]);

  return (
    <>
      <div className="canvas-frame">
        <div className="sketch">{algoChoice}</div>
      </div>
    </>
  );
};

export default Canvas;
