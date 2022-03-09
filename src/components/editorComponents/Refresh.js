import { RefreshContext } from "../../contexts/RefreshContext";
import { useState, useContext } from "react";
import StartStop from "./StartStop";
import { StartStopContext } from "../../contexts/StartStopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Refresh = () => {
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [startStop, setStartStop] = useContext(StartStopContext);

  const refreshHandler = (e) => {
    setRefresh(true);
    console.log("refresh triggered");
    // console.log(refresh);
  };

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  // if (startStop.start) {
  // } else {
  //   parameterStatus = "saturate(0%) brightness(.4)";
  // }

  return (
    // <div style={{ filter: `${parameterStatus}` }}>
    <>
      <button onClick={refreshHandler}>
        <FontAwesomeIcon icon={faSlidersH} className="fa-icon" />
        Reset sliders
      </button>
    </>
  );
};

export default Refresh;
