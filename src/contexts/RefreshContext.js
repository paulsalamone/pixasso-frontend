import { useState, createContext } from "react";

export const RefreshContext = createContext();

export const RefreshController = (props) => {
  const [refresh, setRefresh] = useState({
    refresh: false,
  });

  return (
    <RefreshContext.Provider value={[refresh, setRefresh]}>
      {props.children}
    </RefreshContext.Provider>
  );
};
