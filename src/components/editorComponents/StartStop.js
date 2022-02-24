import { ProjectContext } from "../../contexts/ProjectContext";
import { useState, useContext } from "react";

const StartStop = () => {
  const [project, setProject] = useContext(ProjectContext);

  const startHandler = (e) => {
    e.preventDefault();
    if (project.start) {
      setProject({ ...project, start: false });
    } else {
      setProject({ ...project, start: true });
    }
    console.log(project.start);
  };

  return (
    <div>
      <p>Animation: </p>
      <button onClick={startHandler}>start / stop</button>
    </div>
  );
};

export default StartStop;
