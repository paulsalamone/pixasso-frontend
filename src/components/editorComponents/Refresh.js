import { ProjectContext } from "../../contexts/ProjectContext";
import { useState, useContext } from "react";

const Refresh = () => {
  const [project, setProject] = useContext(ProjectContext);

  function refreshPage(e) {
    // e.target.preventDefault();
    window.location.reload(false);
    setProject({ ...project, refresh: true });
    console.log("Refresh: " + project.refresh);
  }

  return (
    <div>
      <p>Page:</p>
      <button onClick={refreshPage}>refresh</button>
    </div>
  );
};

export default Refresh;
