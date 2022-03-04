import { useState, createContext } from "react";

export const BackgroundContext = createContext();

export const BackgroundController = (props) => {
  const [background, setBackground] = useState("");

  return (
    <BackgroundContext.Provider value={[background, setBackground]}>
      {props.children}
    </BackgroundContext.Provider>
  );
};
