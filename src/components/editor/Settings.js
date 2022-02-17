import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const Settings = (props) => {
  const [color, setColor] = useState("#aabbcc");
  props.setBGcolor(color);

  console.log(color);
  return (
    <div className="settings">
      <div className="project-name">
        <h2>Project Name []</h2>
      </div>
      <div className="settings-box" id="choose-algorithm">
        <p>Choose algorithm:</p>
        <select>
          <option>Algo 1</option>
          <option>Algo 2</option>
        </select>
      </div>
      <div className="settings-box" id="format">
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
      </div>
    </div>
  );
};

export default Settings;
