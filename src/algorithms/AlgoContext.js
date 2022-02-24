import { useState, createContext } from "react";
import data from "./001_demo/algosData.json";

export const AlgoContext = createContext();

export const AlgoController = (props) => {
  const [colors, setColors] = useState(data.colors);
  const [stroke, setStroke] = useState(data.stroke);

  const handleColors = ({ currentTarget: input }) => {
    setColors({ ...colors, [input.name]: input.value });
  };

  return (
    <AlgoContext.Provider
      value={[colors, setColors, stroke, setStroke, handleColors]}
    >
      {props.children}
    </AlgoContext.Provider>
  );
};
