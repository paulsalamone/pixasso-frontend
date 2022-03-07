import { SaveContext } from "../../contexts/SaveContext";
import { useContext } from "react";

const Save = () => {
  const [saveImage, setSaveImage] = useContext(SaveContext);

  const handleSaveImage = (e) => {
    setSaveImage(true);
  };

  return (
    <>
      <button onClick={handleSaveImage}>Download</button>
    </>
  );
};

export default Save;
