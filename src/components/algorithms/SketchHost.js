import Sketch from "react-p5";
import { useContext, useState, useEffect } from "react";
import { BackgroundContext } from "../../contexts/BackgroundContext";
const Algo3Sketch = (props) => {
  const [background, setBackground] = useContext(BackgroundContext);

  const [trigger, setTrigger] = useState(false);

  // useEffect(() => {
  //   console.log("Background: " + background);
  //   console.log("Wipe: " + props.wipe);

  //   if (background !== "" || props.wipe === true) {
  //     setTrigger(true);
  //     // console.log("Trigger: " + trigger);
  //   }
  //   setTrigger(true);
  //   // props.setWipe(false);
  // }, [background, props.wipe]);

  // console.log("Trigger: " + trigger);

  useEffect(() => {
    setTrigger(!trigger);
  }, [background, props.wipe]);

  // useEffect(() => {
  //   setTrigger(!trigger);
  // }, [props.wipe]);

  console.log(background);

  return (
    <>
      {/* !props.wipe */}
      {trigger ? (
        <Sketch
          // preload={props.preload}
          setup={props.setup}
          draw={props.draw}
          id="1"
        />
      ) : (
        <>
          <Sketch
            // preload={props.preload}
            setup={props.setup}
            draw={props.draw}
            id="2"
          />
        </>
      )}
    </>
  );
};

export default Algo3Sketch;
