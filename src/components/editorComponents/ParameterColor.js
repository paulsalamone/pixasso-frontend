import { StartStopContext } from "../../contexts/StartStopContext";
import { useContext, useEffect, useState } from "react";

const ParameterColor = (props) => {
  const [startStop, setStartStop] = useContext(StartStopContext);
  const [sliderColor, setSliderColor] = useState(`rgb(0,0,0)`);
  const [sliderBackground, setSliderBackground] = useState(``);
  //   console.log("----->" + props.BGhue);

  useEffect(() => {
    if (props.color === "red") {
      setSliderColor(`rgb(${props.value},0,0)`);
    }
    if (props.color === "green") {
      setSliderColor(`rgb(0,${props.value},0)`);
    }
    if (props.color === "blue") {
      setSliderColor(`rgb(0,0,${props.value})`);
    }

    if (props.color === "hue") {
      setSliderColor(`black`);
      setSliderBackground(`linear-gradient(
		45deg,
		hsl(0deg 100% 50%) 0%,
		hsl(36deg 100% 50%) 10%,
		hsl(72deg 100% 50%) 20%,
		hsl(108deg 100% 50%) 30%,
		hsl(144deg 100% 50%) 40%,
		hsl(180deg 100% 50%) 50%,
		hsl(216deg 100% 50%) 60%,
		hsl(252deg 100% 50%) 70%,
		hsl(288deg 100% 50%) 80%,
		hsl(324deg 100% 50%) 90%,
		hsl(360deg 100% 50%) 100%
	  )`);
    }

    if (props.color === "saturation") {
      setSliderColor(`black`);
      setSliderBackground(`linear-gradient(
		45deg,
		hsl(0deg 0% 50%) 0%,

		hsl(${props.hue}deg 100% 50%) 100%
	  )`);
    }
    if (props.color === "brightness") {
      setSliderColor(`black`);
      setSliderBackground(`linear-gradient(
		  45deg,
		  hsl(0deg 0% 0%) 0%,
  
		  hsl(0deg 100% 100%) 100%
		)`);
    }
    console.log(sliderColor);
  }, [props.value, props.hue]);

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  // if (startStop.start) {
  // } else {
  //   parameterStatus = "contrast(0%) saturate(0%) brightness(.8)";
  // }

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
          onChange={props.handleParameter}
          // onChange={startStop.start ? props.handleParameter : null}
          className="slider"
          style={{
            backgroundColor: sliderColor,
            backgroundImage: sliderBackground,
          }}
        />
      </div>
    </>
  );
};

export default ParameterColor;

// .slider {
// 	-webkit-appearance: none;
// 	width: 100%;
// 	height: 3px;
// 	background: rgb(126, 126, 126);
// 	outline: none;
// 	border: 1px solid rgb(142, 142, 142);
// 	border-radius: 8px;
//   }

//   /* for chrome/safari */
//   .slider::-webkit-slider-thumb {
// 	-webkit-appearance: none;
// 	appearance: none;
// 	width: 8px;
// 	height: 25px;
// 	background: white;
// 	cursor: pointer;
// 	border: 1px solid grey;
// 	border-radius: 4px;
//   }

//   /* for firefox */
//   .slider::-moz-range-thumb {
// 	width: 8px;
// 	height: 25px;
// 	background: white;
// 	cursor: pointer;
// 	border: 1px solid grey;
// 	border-radius: 4px;
//   }
