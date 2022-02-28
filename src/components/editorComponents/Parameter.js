import { StartStopContext } from "../../contexts/StartStopContext";
import { useContext } from "react";

const Parameter = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  if (startStop.start) {
    console.log("start");
  } else {
    console.log("stop");
    parameterStatus = "contrast(0%) saturate(0%) brightness(.8)";
  }

  return (
    <>
      <div className="parameter" style={{ filter: `${parameterStatus}` }}>
        <label>
          <p>{props.id}</p>
          <p>{props.value}</p>
        </label>
        <input
          type="range"
          name={props.name}
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={startStop.start ? props.handleParameter : null}
          className="slider"
        />
      </div>
      {/* <p>{props.value}</p> */}
    </>
  );
};

export default Parameter;
