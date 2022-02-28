import "../../styles/editor.css";
import { AlgoContext } from "../../contexts/AlgoContext";
import { useState, useEffect, useContext } from "react";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";
import AlgoFrame from "../algorithms/AlgoFrame";

import data from "../algorithms/parameterData.json";

const Editor = () => {
  const [algo, setAlgo] = useContext(AlgoContext);
  const [algoChoice, setAlgoChoice] = useState(<Algo1 />);

  // this re-sets the Algo being displayed every time the parameter is change in the dropdown:
  useEffect(() => {
    switch (algo) {
      case "Algo1":
        setAlgoChoice(<Algo1 />);
        break;
      case "Algo2":
        setAlgoChoice(<Algo2 />);
        break;
      case "Algo3":
        //algo frame showing by default as delimited below:
        setAlgoChoice(<AlgoFrame />);
        break;

      default:
        console.log("error");
    }
  }, [algo]);

  return (
    <>
      <main>
        <section className="easel">
          <div className="canvas-frame">
            {/* <div className="sketch">{algoChoice}</div> */}
            <div className="sketch">
              <AlgoFrame />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Editor;
