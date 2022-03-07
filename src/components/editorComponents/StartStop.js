import { StartStopContext } from "../../contexts/StartStopContext";
import { useState, useEffect, useContext } from "react";

const StartStop = () => {
  const [startStop, setStartStop] = useContext(StartStopContext);

  useEffect(() => {
    setStartStop({ ...startStop, start: true });
  }, []);

  const startHandler = (e) => {
    e.preventDefault();
    if (startStop.start) {
      setStartStop({ ...startStop, start: false });
    } else {
      setStartStop({ ...startStop, start: true });
    }
    // console.log(startStop.start);
  };

  return (
    <div className="start-stop">
      <p>
        {/* Animation: */}
        <button onClick={startHandler}>Start / Stop</button>{" "}
      </p>
    </div>
  );
};

export default StartStop;
