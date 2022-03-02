import Sketch from "react-p5";

const Algo2Sketch = (props) => {
  return (
    <>
      <Sketch setup={props.setup} draw={props.draw} />
    </>
  );
};

export default Algo2Sketch;
