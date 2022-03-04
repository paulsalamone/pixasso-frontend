import { StartStopContext } from "../../contexts/StartStopContext";
import { useContext, useEffect, useState } from "react";
import { BrushContext } from "../../contexts/BrushContext";

const ParameterBrush = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);

  const [brushChoice, setBrushChoice] = useContext(BrushContext);
  // const [toggled, setToggled] = useState(false);

  // if toggled is true, set a style
  // use useEffect to set toggle back to false if the brushcontext changes again

  let brushToggle = "#333333";

  const brushHandler = (e) => {
    setBrushChoice(e.target.value);
  };

  if (brushChoice === props.value) {
    // console.log(`You chose ${brushChoice} / ${props.value}`);
    brushToggle = "#aaaaaa";
  }

  return (
    <>
      <label>
        {/* <p>{props.id}</p> */}
        {/* <p>{props.value}</p> */}
      </label>
      <button
        className="parameter-radio-choice"
        onClick={brushHandler}
        style={{ backgroundColor: `${brushToggle}` }}
        value={props.value}
      >
        {props.id}
      </button>
    </>
  );
};

export default ParameterBrush;
