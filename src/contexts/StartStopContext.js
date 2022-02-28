import { useState, createContext } from "react";

export const StartStopContext = createContext();

export const StartStopController = (props) => {
  const [startStop, setStartStop] = useState({
    start: true,
  });

  return (
    <StartStopContext.Provider value={[startStop, setStartStop]}>
      {props.children}
    </StartStopContext.Provider>
  );
};
