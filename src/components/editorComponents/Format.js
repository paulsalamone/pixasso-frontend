import { ProjectContext } from "../../contexts/ProjectContext";
import { useState, useContext } from "react";

const Format = (props) => {
  const [project, setProject] = useContext(ProjectContext);

  const formatHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "square") {
      setProject({ ...project, width: 500, height: 500 });
      console.log("square");
    } else if (e.target.value === "landscape") {
      setProject({ ...project, width: 700, height: 500 });
      console.log("landscape");
    } else {
      setProject({ ...project, width: 500, height: 700 });
      console.log("portrait");
    }
    // window.location.reload(false);
  };

  console.log(project.width);
  console.log(project.height);

  return (
    <>
      <div className="format">
        <p>
          Format: {project.width} x {project.height}
        </p>
        <select onChange={formatHandler}>
          <option value="square">Square (500x500)</option>
          <option value="landscape">Landscape (700x500)</option>
          <option value="portrait">Portrait (500x700)</option>
        </select>
        {/* <input
          type="text"
          id="format-width"
          value={props.state.formatWidth}
          onChange={(e) =>
            props.dispatch({ type: "newFormatWidth", payload: e.target.value })
          }
          placeholder="width"
          size="10"
        ></input>
        px
        <br />
        <label for="width">Height:</label>{" "}
        <input
          type="text"
          id="format-height"
          value={props.state.formatHeight}
          onChange={(e) =>
            props.dispatch({ type: "newFormatHeight", payload: e.target.value })
          }
          placeholder="height"
          size="10"
        ></input>
        px
      </div> */}
      </div>
    </>
  );
};

export default Format;
