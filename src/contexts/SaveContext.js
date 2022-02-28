import { useState, createContext } from "react";

export const SaveContext = createContext();

export const SaveController = (props) => {
  const [saveImage, setSaveImage] = useState({
    saveImage: false,
  });

  return (
    <SaveContext.Provider value={[saveImage, setSaveImage]}>
      {props.children}
    </SaveContext.Provider>
  );
};
