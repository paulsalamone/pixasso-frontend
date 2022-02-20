import { useState, useEffect, useContext } from "react";
import Sketch from "react-p5";
// import WEBGL from "webgl";
import { Route, Routes, Link } from "react-router-dom";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../../algorithms/001_demo/Algo1";
import Algo2 from "../../algorithms/001_demo/Algo2";

const Artwork = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);
  const [choice, setChoice] = useState(<Algo1 />);

  useEffect(() => {
    switch (algo) {
      case "algo1":
        setChoice(<Algo1 start={props.start} />);
        break;
      case "algo2":
        setChoice(<Algo2 start={props.start} />);
        break;
      default:
        console.log("default");
    }
  }, [algo]);

  return (
    <>
      <div className="artwork" style={{ backgroundColor: `${props.BGcolor}` }}>
        {choice}
      </div>
    </>
  );
};

export default Artwork;
