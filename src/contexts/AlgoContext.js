import { useState, createContext } from "react";

export const AlgoContext = createContext();

export const AlgoController = (props) => {
  const [algo, setAlgo] = useState("algo1");

  return (
    <AlgoContext.Provider value={[algo, setAlgo]}>
      {props.children}
    </AlgoContext.Provider>
  );
};
