import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

const WipeScreen = (props) => {
  const handleWipe = () => {
    props.setWipe(!props.wipe);
    // setRefresh(true);
  };
  return (
    <>
      <button onClick={handleWipe}>
        <FontAwesomeIcon icon={faEraser} className="fa-icon" />
        Wipe Screen
      </button>
    </>
  );
};

export default WipeScreen;
