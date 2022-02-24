import { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectController = (props) => {
  const [project, setProject] = useState({
    name: "my-project",
    algo: "algo1",
    start: "true",
    rate: 10,
    width: 500,
    height: 500,
    red: 100,
    green: 100,
    blue: 100,
    hue: 0,
    saturation: 0,
    brightness: 50,
  });

  return (
    <ProjectContext.Provider value={[project, setProject]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
