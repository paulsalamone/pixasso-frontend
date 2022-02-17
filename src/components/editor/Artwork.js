import { useState, useEffect } from "react";
import Sketch from "react-p5";

const Artwork = (props) => {
  const [a, setA] = useState(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    // p5.background(props.BGcolor);
  };

  let d = 0;
  let f = 0;

  const draw = (p5) => {
    p5.frameRate(20);
    let index = 0.2;
    //paused drawing starts here:
    if (props.start) {
      for (let i = 0; i < p5.width / 10; i++) {
        p5.stroke(p5.noise(index), 100, 100);
        p5.line(i * p5.noise(index) * 20, 0, i * p5.random(0, 1), p5.height);
        index += 1;
      }
    }
  };

  return (
    <>
      <div className="artwork" style={{ backgroundColor: `${props.BGcolor}` }}>
        {" "}
        <Sketch setup={setup} draw={draw} className="p5Sketch" />
      </div>
    </>
  );
};

export default Artwork;
