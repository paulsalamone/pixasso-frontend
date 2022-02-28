import React, { useState } from "react";
import axios from "axios";

const Upload = (props) => {
  const [image, setImage] = useState("");
  //   const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async () => {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "sketch");
    imageData.append("cloud_name", "pixasso");

    fetch(" https://api.cloudinary.com/v1_1/pixasso/image/upload", {
      method: "post",
      body: imageData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.setImageUrl(data.url);
        axios
          .post("http://localhost:5000/api/sketch/upload", {
            sketch_Url: props.imageUrl,
          })
          .then(console.log("image saved"));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* <p>Upload BG image:</p> */}
      <div className="form-page">
        <label class="custom-file-upload">
          <input
            className="choose-file"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
        </label>

        <button onClick={uploadImage}>Upload</button>
        <div>
          {/* <p>Uploaded image will be displayed here</p> */}
          <img src={props.imageUrl} />
        </div>
      </div>
    </>
  );
};

export default Upload;
