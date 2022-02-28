import { createContext, useState } from "react";

export const Algo3Context = createContext();

export const Algo3Controller = (props) => {
  const [_, set_] = useState({
    sizeRange: 15,
    scale: 1,
    strokeWeight: 1,
    jiggle: 0,
    jiggle2: 0,
    strokeShade: 0,
    strokeOpacity: 0,
    red: 185,
    green: 185,
    blue: 185,
    spread: 0,
    K: 0,
    L: 0,
    BGhue: 100,
    BGsaturation: 70,
    BGbrightness: 80,
  });

  return (
    <Algo3Context.Provider value={[_, set_]}>
      {props.children}
    </Algo3Context.Provider>
  );
};
