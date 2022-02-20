import { useState, useEffect } from "react";
import Artwork from "./Artwork";

const Canvas = (props) => {
  const [start, setStart] = useState(false);
  const [rate, setRate] = useState(25);

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
      <div className="controls">
        <div className="control-buttons">
          <button onClick={handleStart}>Start/Stop</button>
          <button onClick={refreshPage}>Refresh</button>
        </div>
        {/* <div className="control-speed">
          <label for="speed">Speed: </label>
          <input
            type="range"
            min="0"
            max="60"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
          ></input>
        </div> */}
      </div>
      <div className="frame">
        <Artwork BGcolor={props.BGcolor} start={start} frameRate={rate} />
      </div>

      <div className="export">
        <button>Save</button>
        <p>you must be registered to save</p>
      </div>
    </div>
  );
};

export default Canvas;
