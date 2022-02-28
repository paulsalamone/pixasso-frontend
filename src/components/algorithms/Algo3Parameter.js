import { StartStopContext } from "../../contexts/StartStopContext";
import { useContext } from "react";
import { Algo3Context } from "../algorithms/Algo3Context";
const Algo3Parameter = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [_, set_] = useContext(Algo3Context);

  const handleParameter = ({ currentTarget: input }) => {
    set_({
      ..._,
      [input.name]: input.value,
    });
  };

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  if (startStop.start) {
  } else {
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
          onChange={startStop.start ? handleParameter : null}
          className="slider"
        />
      </div>
    </>
  );
};

export default Algo3Parameter;
