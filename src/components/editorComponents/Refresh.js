import { RefreshContext } from "../../contexts/RefreshContext";
import { useState, useContext } from "react";
import StartStop from "./StartStop";
import { StartStopContext } from "../../contexts/StartStopContext";
const Refresh = () => {
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [startStop, setStartStop] = useContext(StartStopContext);
  const refreshHandler = (e) => {
    setRefresh(true);
    console.log("refresh triggered");
    // console.log(refresh);
  };

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  if (startStop.start) {
  } else {
    parameterStatus = "saturate(0%) brightness(.4)";
  }

  return (
    <div style={{ filter: `${parameterStatus}` }}>
      <button onClick={refreshHandler}>Reset sliders</button>
    </div>
  );
};

export default Refresh;
