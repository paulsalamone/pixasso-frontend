import { useState, useEffect, useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../../algorithms/001_demo/Algo1";
import Algo2 from "../../algorithms/001_demo/Algo2";
const Settings = (props) => {
  const [color, setColor] = useState("#aabbcc");
  const [algo, setAlgo] = useContext(AlgoContext);

  // console.log("first render settings page");
  // console.log(algo);

  props.setBGcolor(color);

  // console.log(color);

  const algoSelectionHandler = (e) => {
    setAlgo(e.target.value);
  };

  // console.log("settings page:");
  // console.log(algo);

  return (
    <div className="settings">
      <div className="project-name">
        <h2>Project Name []</h2>
      </div>
      <div className="settings-box" id="choose-algorithm">
        <p>Choose algorithm:</p>
        <select onChange={algoSelectionHandler}>
          <option value="algo1">Algo 1</option>
          <option value="algo2">Algo 2</option>
        </select>
      </div>
      {/* <div className="settings-box" id="format">
        <p>Format:</p>
        <div className="formats">
          <div id="square"></div>
          <div id="portrait"></div>
          <div id="landscape"></div>
        </div>
      </div>
      <div
        className="settings-box"
        id="format"
        // style={{ backgroundColor: `${hex}` }}
      >
        <p>Background color:</p>
        <div className="custom-pointers example color-picker">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div> */}
    </div>
  );
};

export default Settings;
