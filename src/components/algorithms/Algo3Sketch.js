import Sketch from "react-p5";

const Algo3Sketch = (props) => {
  return (
    <>
      <Sketch setup={props.setup} draw={props.draw} />
    </>
  );
};

export default Algo3Sketch;
