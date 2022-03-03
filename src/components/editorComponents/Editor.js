import "../../styles/editor.css";
import { AlgoContext } from "../../contexts/AlgoContext";
import { useState, useEffect, useContext } from "react";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";
import Algo3 from "../algorithms/Algo3";
import Algo4 from "../algorithms/Algo004_Brushes";
import Algo5 from "../algorithms/Algo005_Moire";
import Algo6 from "../algorithms/Algo006_Escher";

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
        setAlgoChoice(<Algo3 />);
        break;
      case "Algo4":
        setAlgoChoice(<Algo4 />);
        break;
      case "Algo5":
        setAlgoChoice(<Algo5 />);
        break;
      case "Algo6":
        setAlgoChoice(<Algo6 />);
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
            <div className="sketch">
              {/* <Algo6 /> */}
              {algoChoice}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Editor;
