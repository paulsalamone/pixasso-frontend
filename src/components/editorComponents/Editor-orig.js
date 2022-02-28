import "../../styles/editor.css";
import { AlgoContext } from "../../contexts/AlgoContext";
import { useState, useEffect, useContext } from "react";
import Algo1 from "../algorithms/Algo1";
import Algo2 from "../algorithms/Algo2";

const Editor = () => {
  const [algo, setAlgo] = useContext(AlgoContext);
  const [algoChoice, setAlgoChoice] = useState(<Algo1 />);

  useEffect(() => {
    switch (algo) {
      case "Algo1":
        setAlgoChoice(<Algo1 />);
        break;
      case "Algo2":
        setAlgoChoice(<Algo2 />);
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
            <div className="sketch">{algoChoice}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Editor;
