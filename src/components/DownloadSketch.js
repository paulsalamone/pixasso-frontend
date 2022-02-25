import React from "react";
import domtoimage from "dom-to-image";
import saveAs from "file-saver";
import { useState } from "react";
import test from "./byc.jpg";

const DownloadSketch = () => {
  const [image, setImage] = useState(test);

  const saveImage = () => {
    const image = document.getElementById(image);
    console.log("download sketch");
    domtoimage.toBlob(image).then(function (image) {
      window.saveAs(image, "test.png");
    });
  };

  return (
    <>
      <div id="bucket">
        <h1>Uploaded image will be displayed here</h1>
        {/* <img src={image} /> */}
      </div>
      <div>
        <button onClick={saveImage}>save</button>
      </div>
    </>
  );
};
export default DownloadSketch;
