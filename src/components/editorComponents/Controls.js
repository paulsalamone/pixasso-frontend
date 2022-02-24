import { ProjectContext } from "../../contexts/ProjectContext";
import { useState, useContext } from "react";

const Controls = () => {
  const [project, setProject] = useContext(ProjectContext);

  function refreshPage() {
    window.location.reload(false);
    setProject({ ...project, hue: 0 });
    setProject({ ...project, saturation: 0 });
    setProject({ ...project, brightness: 50 });
  }

  const startHandler = (e) => {
    e.preventDefault();
    if (project.start) {
      setProject({ ...project, start: false });
    } else {
      setProject({ ...project, start: true });
    }
    console.log(project.start);
  };

  const rateHandler = (e) => {
    setProject({ ...project, rate: e.target.value });
    console.log(project.rate);
  };

  return (
    <>
      <div className="controls">
        <p>
          Animation:
          <button onClick={startHandler}>start / stop</button>
        </p>
        <p>
          Page:
          <button onClick={refreshPage}>refresh</button>
        </p>
        {/* <p>
          Speed:
          <input type="range" min="-2" max="62" onChange={rateHandler} />
        </p> */}
      </div>
    </>
  );
};

export default Controls;
