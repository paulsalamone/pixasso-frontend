import { useContext } from "react";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";

const AlgoSelector = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);

  console.log(algo);

  return (
    <div className="algo-selector">
      <p>
        Algorithm:
        <select
          onChange={(e) => {
            setAlgo(e.target.value);
            console.log("selection made");
          }}
        >
          <option value="Algo1" selected={algo === "Algo1" ? "selected" : ""}>
            Psychic Raindrops
          </option>
          <option value="Algo2" selected={algo === "Algo2" ? "selected" : ""}>
            Circles vs. Squares
          </option>
          <option value="Algo3" selected={algo === "Algo3" ? "selected" : ""}>
            Crazy Painter
          </option>
          {/* <option value="Algo3" selected={algo === "Algo3" ? "selected" : ""}>
            Algo 3 Test
          </option>
          <option value="Algo4" selected={algo === "Algo4" ? "selected" : ""}>
            Algo 4 Test
          </option> */}
          {/* <option value="Algo3" selected={algo === "Algo3" ? "selected" : ""}>
            Sci-Fi Clouds
          </option> */}
          {/* <option value="Nests">Nests</option> */}
        </select>
      </p>
    </div>
  );
};

export default AlgoSelector;
