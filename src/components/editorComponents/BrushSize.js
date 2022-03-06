import Sketch from "react-p5";

const BrushSize = (props) => {
  console.log("Size:" + props.size);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(100, 80).parent(canvasParentRef);
    p5.background(55);
  };

  function draw(p5) {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2);
    // p5.circle(-50, -50, 50);
    p5.circle(0, 0, props.size);
  }

  return (
    <>
      <div
      //   style={{ border: "2px solid red" }}
      >
        <Sketch setup={setup} draw={draw} />
      </div>
    </>
  );
};

export default BrushSize;
