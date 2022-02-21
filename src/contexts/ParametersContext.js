import { useState, createContext } from "react";

export const ParametersContext = createContext();

export const ParametersController = (props) => {
  // actually do a list of all 9+ params here as individual useStates
  //but how to set name/min/max/default values?

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [aa, setAA] = useState(0);

  const [parameters, setParameters] = useState([a, b, c, d, e, f, g, h, aa]);

  const [allParameters, setAllParameters] = useState({});

  //then a master list you loop through and add to in an object later later

  return (
    <ParametersContext.Provider
      value={[
        parameters,
        setParameters,
        allParameters,
        setAllParameters,
        a,
        setA,
        b,
        setB,
        c,
        setC,
        d,
        setD,
        e,
        setE,
        f,
        setF,
        g,
        setG,
        h,
        setH,
        aa,
        setAA,
      ]}
    >
      {props.children}
    </ParametersContext.Provider>
  );
};
