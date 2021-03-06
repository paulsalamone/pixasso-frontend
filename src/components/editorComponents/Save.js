import { SaveContext } from "../../contexts/SaveContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Save = () => {
  const [saveImage, setSaveImage] = useContext(SaveContext);

  const handleSaveImage = (e) => {
    setSaveImage(true);
  };

  return (
    <>
      <button onClick={handleSaveImage}>
        {" "}
        <FontAwesomeIcon icon={faDownload} className="fa-icon" />
        Download
      </button>
    </>
  );
};

export default Save;
