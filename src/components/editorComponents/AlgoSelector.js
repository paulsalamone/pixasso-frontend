import { ProjectContext } from "../../contexts/ProjectContext";
import { useContext } from "react";

const AlgoSelector = (props) => {
  const [project, setProject] = useContext(ProjectContext);

  const handleParameter = ({ currentTarget: input }) => {
    setProject({ ...project, [input.name]: input.value });
  };

  // console.log(project);
  return (
    <div>
      <p>AlgoSelector:</p>
      <select
        onChange={(e) =>
          props.dispatch({
            type: "newAlgoSelection",
            payload: e.target.value,
          })
        }
      >
        <option value="algo1">Algo 1</option>
        <option value="algo2">Algo 2</option>
        <option value="nests">Nests</option>
      </select>
    </div>
  );
};

export default AlgoSelector;
