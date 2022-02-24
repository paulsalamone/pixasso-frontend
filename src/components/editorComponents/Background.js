import { HuePicker } from "react-color";
import { useState, useContext } from "react";
import Parameter from "./Parameter";
import { ProjectContext } from "../../contexts/ProjectContext";

const Background = (props) => {
  const [project, setProject] = useContext(ProjectContext);

  const handleParameter = ({ currentTarget: input }) => {
    setProject({ ...project, [input.name]: input.value });
  };

  return (
    <>
      <div className="BGcolor">
        <p>Background Color:</p>
        <div className="parameters-group">
          <Parameter
            name="hue"
            value={project.hue}
            min="0"
            max="360"
            handleParameter={handleParameter}
          />
          <Parameter
            name="saturation"
            value={project.saturation}
            min="0"
            max="100"
            handleParameter={handleParameter}
          />
          <Parameter
            name="brightness"
            value={project.brightness}
            min="0"
            max="100"
            handleParameter={handleParameter}
          />
        </div>
        {/* <HuePicker /> */}
        {/* <input
          type="text"
          id="BG-color"
          value={props.state.BGcolor}
          onChange={(e) =>
            props.dispatch({ type: "newBGcolor", payload: e.target.value })
          }
        ></input> */}
      </div>
    </>
  );
};

export default Background;
