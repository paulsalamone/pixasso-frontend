import { StartStopContext } from "../../contexts/StartStopContext";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faPlay } from "@fortawesome/free-solid-svg-icons";

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
        <button onClick={startHandler}>
          <FontAwesomeIcon
            icon={faPlay}
            style={{ opacity: 0.5, marginRight: "5px" }}
          />
          Start / Stop
        </button>{" "}
      </p>
    </div>
  );
};

export default StartStop;
