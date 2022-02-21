import { useState, useEffect, useContext } from "react";
import Artwork from "./Artwork";
import Parameters from "./Parameters";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../../algorithms/001_demo/Algo1";
import Algo2 from "../../algorithms/001_demo/Algo2";

const Canvas = (props) => {
  const [start, setStart] = useState(false);
  const [rate, setRate] = useState(25);

  const [algo, setAlgo] = useContext(AlgoContext);
  const [choice, setChoice] = useState(<Algo1 />);

  useEffect(() => {
    switch (algo) {
      case "algo1":
        setChoice(
          <Algo1
            BGcolor={props.BGcolor}
            start={props.start}
            rate={props.rate}
          />
        );
        break;
      case "algo2":
        setChoice(
          <Algo2
            BGcolor={props.BGcolor}
            start={props.start}
            rate={props.rate}
          />
        );
        break;
      default:
        console.log("default");
    }
  }, [algo]);

  const handleStart = () => {
    if (start) {
      setStart(false);
    } else {
      setStart(true);
    }
    console.log(start);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="canvas">
      <div className="canvas-center">
        <div className="controls">
          <div className="control-buttons">
            <button onClick={handleStart}>Start/Stop</button>
            <button onClick={refreshPage}>Refresh</button>
          </div>
          <div className="control-speed">
            <label for="speed">Speed: </label>
            <input
              type="range"
              min="0"
              max="60"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            ></input>
          </div>
        </div>
        <div className="frame">
          {/* <Artwork BGcolor={props.BGcolor} start={start} frameRate={rate} /> */}

          <div
            className="artwork"
            style={{ backgroundColor: `${props.BGcolor}` }}
          >
            {/* ALGORITHMS APPEAR HERE: */}
            {choice}
          </div>
        </div>

        {/* EXPORT AREA */}
        <div className="export">
          <button>Save</button>
          <p>you must be registered to save</p>
        </div>
      </div>
      <div className="canvas-right">
        <Parameters />
      </div>
    </div>
  );
};

export default Canvas;
