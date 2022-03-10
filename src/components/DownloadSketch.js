import React from "react";
import domtoimage from "dom-to-image";

const DownloadSketch = () => {
  function saveImage() {
    const image = document.getElementById("bucket");
    console.log("download sketch");
    domtoimage.toBlob(image).then(function (image) {
      window.saveAs(image, "test.png");
    });
  }

  return (
    <>
      <div id="bucket">
        <h1 style={{ color: "blue", padding: "50px" }}>hello world</h1>
      </div>
      <div>
        <button onClick={saveImage}>save</button>
      </div>
    </>
  );
};
export default DownloadSketch;
