import axios from "axios";

export const uploadImage = async () => {
    const image = document.getElementById("defaultCanvas0");
   let url;
    image.toBlob(async (blob) => {
        const data = new FormData();
        data.append("file", blob);
        data.append("upload_preset", "sketch");
        data.append("cloud_name", "pixasso");
        //console.log(data)
        await fetch("https://api.cloudinary.com/v1_1/pixasso/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.url);
            url = data.url;
            axios
              .post("http://localhost:4000/api/sketch/upload", {
                sketch_url: url,
              })
              .then((res) => console.log(res))
              .then(console.log("url saved"));
          })
          .catch((err) => console.log(err));
      },
      "image/jpeg",
      0.95
    );
  };

