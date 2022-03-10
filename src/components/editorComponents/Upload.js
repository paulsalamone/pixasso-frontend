import React, { useState, useContext } from "react";
import axios from "axios";
import { BackgroundContext } from "../../contexts/BackgroundContext";

const Upload = (props) => {
  const [image, setImage] = useState("");
  //   const [imageUrl, setImageUrl] = useState("");
  const [background, setBackground] = useContext(BackgroundContext);

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
        // props.setImageUrl(data.url);
        setBackground(data.url);
        axios
          .post("https://pixasso.herokuapp.com/api/sketch/upload", {
            // sketch_Url: props.imageUrl,
            sketch_Url: background,
          })
          .then(console.log(`image saved`));
      })
      .catch((error) => console.log(error));
  };

  console.log(background);

  return (
    <>
      <div className="parameters-group">
        <h4>Background:</h4>
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
            <img src={background} style={{ width: "120px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
