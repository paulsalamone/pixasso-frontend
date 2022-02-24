import { ProjectContext } from "../../contexts/ProjectContext";
import { useContext } from "react";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";

const AlgoSelector = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);

  console.log(algo);

  return (
    <div>
      <p>AlgoSelector:</p>
      <select
        onChange={(e) => {
          setAlgo(e.target.value);
          console.log("selection made");
        }}
      >
        <option value="Algo1" selected={algo === "Algo1" ? "selected" : ""}>
          Algo 1
        </option>
        <option value="Algo2" selected={algo === "Algo2" ? "selected" : ""}>
          Algo 2
        </option>
        <option value="Nests">Nests</option>
      </select>
    </div>
  );
};

export default AlgoSelector;
