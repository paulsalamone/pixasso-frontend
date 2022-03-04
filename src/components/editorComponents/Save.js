import { SaveContext } from "../../contexts/SaveContext";
import { useContext } from "react";

const Save = () => {
  const [saveImage, setSaveImage] = useContext(SaveContext);

  const handleSaveImage = (e) => {
    setSaveImage(true);
  };

  return (
    <>
      <button onClick={handleSaveImage}>save to desktop</button>
    </>
  );
};

export default Save;
