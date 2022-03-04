import { useContext } from "react";
import { BrushContext } from "../../contexts/BrushContext";

const ParameterBrush = (props) => {
  const [brushChoice, setBrushChoice] = useContext(BrushContext);

  let brushToggle = "#333333";

  const brushHandler = (e) => {
    setBrushChoice(e.target.value);
  };

  if (brushChoice === props.value) {
    brushToggle = "#aaaaaa";
  }

  return (
    <>
      <label>
        {/* <p>{props.id}</p>
        <p>{props.value}</p> */}
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
