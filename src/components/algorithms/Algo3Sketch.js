import Sketch from "react-p5";

const Algo3Sketch = (props) => {
  return (
    <>
      {!props.wipe ? (
        <Sketch setup={props.setup} draw={props.draw} id="1" />
      ) : (
        <>
          <Sketch setup={props.setup} draw={props.draw} id="2" />
        </>
      )}
    </>
  );
};

export default Algo3Sketch;
