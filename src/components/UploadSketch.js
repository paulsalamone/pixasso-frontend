import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadSketch = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [sketchInfo, setSketchInfo] =useState({
  //     sketch_name = "",
  //     sketch_Url = imageUrl

  // })

  const uploadImage = async () => {
    //const image = document.getElementById(image);
    console.log(image);
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "sketch");
    imageData.append("cloud_name", "pixasso");
    console.log(imageData);

    await fetch("https://api.cloudinary.com/v1_1/pixasso/image/upload", {
      method: "post",
      body: imageData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImageUrl(data.url);
        console.log(data.url);
        axios
          .post("https://pixasso.herokuapp.com/api/sketch/upload", {
            sketch_Url: imageUrl,
          })
          .then(console.log("image saved"));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    uploadImage();
  }, []);

  return (
    <div className="form-page">
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={imageUrl} />
      </div>
    </div>
  );
};
export default UploadSketch;
