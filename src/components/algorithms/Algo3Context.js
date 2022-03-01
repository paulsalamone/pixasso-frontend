import { createContext, useState } from "react";

export const Algo3Context = createContext();

export const Algo3Controller = (props) => {
  const [_, set_] = useState({
    A: 40,
    B: 15,
    C: 4,
    D: 3,
    E: 1,
    F: 0.5,
  });

  return (
    <Algo3Context.Provider value={[_, set_]}>
      {props.children}
    </Algo3Context.Provider>
  );
};
