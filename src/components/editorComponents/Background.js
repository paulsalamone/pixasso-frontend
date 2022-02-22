import { HuePicker } from "react-color";
import { useState, useContext } from "react";
import Parameter from "../../algorithms/001_demo/Parameter";
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
            name="red"
            value={project.red}
            min="0"
            max="255"
            handleParameter={handleParameter}
          />
          <Parameter
            name="green"
            value={project.green}
            min="0"
            max="255"
            handleParameter={handleParameter}
          />
          <Parameter
            name="blue"
            value={project.blue}
            min="0"
            max="255"
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
