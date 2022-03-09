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
    <>
      {/* Animation: */}
      <button onClick={startHandler}>
        <FontAwesomeIcon icon={faPlay} className="fa-icon" />
        Start / Stop
      </button>
    </>
  );
};

export default StartStop;
