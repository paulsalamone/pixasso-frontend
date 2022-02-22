import { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectController = (props) => {
  const [project, setProject] = useState({
    name: "my-project",
    width: 500,
    height: 500,
    red: 100,
    green: 100,
    blue: 100,
  });

  return (
    <ProjectContext.Provider value={[project, setProject]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
