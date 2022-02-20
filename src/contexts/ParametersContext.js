import { useState, createContext } from "react";

export const ParametersContext = createContext();

export const ParametersController = (props) => {
  const [parameters, setParameters] = useState({});

  // actually do a list of all 9+ params here as individual useStates
  //but how to set name/min/max/default values?
  //s

  return (
    <ParametersContext.Provider value={[parameters, setParameters]}>
      {props.children}
    </ParametersContext.Provider>
  );
};
