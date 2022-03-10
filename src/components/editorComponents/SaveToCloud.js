import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";

const SaveToCloud = () => {
  const [user, setUser] = useContext(UserContext);

  const uploadImage = async (props) => {
    const image = document.getElementById("defaultCanvas0");
    image.toBlob(
      async (blob) => {
        const data = new FormData();
        data.append("file", blob);
        data.append("upload_preset", "sketch");
        data.append("cloud_name", "pixasso");
        await fetch("https://api.cloudinary.com/v1_1/pixasso/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then(async (data) => {
            console.log(data.url);
            let url = data.url;
            await axios
              .post("https://pixasso.herokuapp.com/api/sketch/upload", {
                sketch_url: url,
              })
              .then((res) =>
                axios.put(
                  `https://pixasso.herokuapp.com/api/users/${user.id}`,
                  {
                    sketch_ids: res.data._id,
                  }
                )
              )
              .then((res) => console.log(res));
          })
          .catch((err) => console.log(err));
      },
      "image/jpeg",
      0.95
    );
  };

  return (
    <>
      <button onClick={uploadImage}>
        <FontAwesomeIcon icon={faCloudUpload} className="fa-icon" />
        Save
      </button>
    </>
  );
};

export default SaveToCloud;
