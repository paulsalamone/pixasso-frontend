import { ProjectContext } from "../../contexts/ProjectContext";
import { useState, useContext } from "react";

const Refresh = () => {
  const [project, setProject] = useContext(ProjectContext);

  function refreshPage() {
    window.location.reload(false);
    setProject({ ...project, hue: 0 });
    setProject({ ...project, saturation: 0 });
    setProject({ ...project, brightness: 50 });
  }

  return (
    <div>
      <p>Page:</p>
      <button onClick={refreshPage}>refresh</button>
    </div>
  );
};

export default Refresh;
