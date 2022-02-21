import { useState, useEffect } from "react";

const Canvas = (props) => {
  // console.log(props.state.formatWidth);

  return (
    <>
      <h2>{props.projectName}</h2>
      <div className="canvas-frame">
        <div
          className="sketch"
          style={{
            width: `${props.state.formatWidth}px`,
            height: `${props.state.formatHeight}px`,
            backgroundColor: `${props.state.BGcolor}`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Canvas;
