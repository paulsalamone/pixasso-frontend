import { useState, createContext } from "react";

export const SaveContext = createContext();

export const SaveController = (props) => {
  const [save, setSave] = useState({
    start: true,
  });

  return (
    <SaveContext.Provider value={[save, setSave]}>
      {props.children}
    </SaveContext.Provider>
  );
};
