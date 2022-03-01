import React from "react";
import domtoimage from "dom-to-image";
import saveAs from "file-saver";
import { useState } from "react";
import test from "./byc.jpg";

const DownloadSketch = () => {
  //const [image, setImage] = useState("hello world");

  function saveImage(){
    const image = document.getElementById("bucket");
    console.log("download sketch");
    domtoimage.toBlob(image).then(function (image) {
      window.saveAs(image, "test.png");
    });
  };

  return (
    <>
      <div id="bucket">
        <h1 style={{color:"blue", padding: "50px"}} >hello world</h1>
      
        {/* <img style={{height:"300px", width: "300px"}} src={image} /> */}
      </div>
      <div>
        <button onClick={saveImage}>save</button>
      </div>
    </>
  );
};
export default DownloadSketch;
