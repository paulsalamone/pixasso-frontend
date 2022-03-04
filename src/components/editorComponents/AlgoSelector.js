import { useContext } from "react";
import { AlgoContext } from "../../contexts/AlgoContext";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";

const AlgoSelector = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);

  return (
    <div className="algo-selector">
      <p>
        {/* Algorithm: */}
        <select
          onChange={(e) => {
            setAlgo(e.target.value);
            console.log("selection made");
          }}
        >
          <option
            value="Algo1"
            defaultValue={algo === "Algo1" ? "defaultValue" : ""}
          >
            Psychic Raindrops
          </option>
          <option
            value="Algo2"
            defaultValue={algo === "Algo2" ? "defaultValue" : ""}
          >
            Circles vs. Squares
          </option>
          <option
            value="Algo3"
            defaultValue={algo === "Algo3" ? "defaultValue" : ""}
          >
            Cloud Painter
          </option>
          <option
            value="Algo6"
            defaultValue={algo === "Algo6" ? "defaultValue" : ""}
          >
            Escher
          </option>
          {/* <option
            value="Algo5"
            defaultValue={algo === "Algo5" ? "defaultValue" : ""}
          >
            Moiré
          </option> */}
          <option
            value="Algo4"
            defaultValue={algo === "Algo4" ? "defaultValue" : ""}
          >
            Brushes
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
