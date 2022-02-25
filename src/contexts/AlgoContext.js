import { useState, createContext } from "react";
import Algo1 from "../components/algorithms/Algo1";
import Algo2 from "../components/algorithms/Algo2";

export const AlgoContext = createContext();

export const AlgoController = (props) => {
  const [algo, setAlgo] = useState("Algo1");

  return (
    <AlgoContext.Provider value={[algo, setAlgo]}>
      {props.children}
    </AlgoContext.Provider>
  );
};
