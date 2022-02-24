import { ProjectContext } from "../../contexts/ProjectContext";
import { useContext } from "react";

const Parameter = (props) => {
  const [project, setProject] = useContext(ProjectContext);

  let parameterStatus = "contrast(100%) saturate(100%) brightness(1)";

  if (project.start) {
    console.log("start");
  } else {
    console.log("stop");
    parameterStatus = "contrast(50%) saturate(0%) brightness(1.2)";
  }

  return (
    <>
      <div className="parameter" style={{ filter: `${parameterStatus}` }}>
        <label>
          <p>{props.name}</p>
          <p>{props.value}</p>
        </label>
        <input
          type="range"
          name={props.name}
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={project.start ? props.handleParameter : null}
        />
      </div>
      {/* <p>{props.value}</p> */}
    </>
  );
};

export default Parameter;
