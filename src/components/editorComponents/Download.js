import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Download = (props) => {
  const handleSaveImage = (e) => {
    props.setSaveImage(true);
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

export default Download;
