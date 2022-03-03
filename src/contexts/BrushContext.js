import { useState, createContext } from "react";

export const BrushContext = createContext();

export const BrushController = (props) => {
  const [brushChoice, setBrushChoice] = useState("default");

  return (
    <BrushContext.Provider value={[brushChoice, setBrushChoice]}>
      {props.children}
    </BrushContext.Provider>
  );
};
