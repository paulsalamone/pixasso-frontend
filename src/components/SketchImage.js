import React, { useState } from 'react';
import axios from 'axios';

const SketchImage = () => {
    const [image, setImage ] = useState("");
    const [imageUrl, setImageUrl ] = useState("");
    const [loading, setLoading] = useState(false);
    // const [sketchInfo, setSketchInfo] =useState({
    //     sketch_name = "",
    //     sketch_Url = imageUrl

    // })
    const uploadImage = async() => {
        const imageData = new FormData()
        imageData.append("file", image)

        // try {
        //     const response = await axios.post("http://localhost:5000/api/sketch/upload", imageData, {
        //         headers: {
        //         "Content-Type": "multipart/form-data",
        //         },
        //     });
        //     console.log("image uploaded successfully")
        //     } catch (error) {
        //     console.log("error occurred  while uploading image", error.data);
        //     }

        imageData.append("upload_preset", "sketch")
        imageData.append("cloud_name","pixasso")
        try {
            setLoading(true)
            const apiUrl = "https://api.cloudinary.com/v1_1/pixasso/image/upload"
            await axios
            .post (apiUrl, imageData)
            .then(res => {
                //console.log(res.data)
                setImageUrl(res.data.url)
                setLoading(false)
                console.log(imageUrl)
            })
            setLoading(true)
            await axios
            .post("http://localhost:5000/api/sketch/upload", imageUrl)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    } 
   

return (
    <div>
        <div>
            <input 
            type="file"
            onChange= {(e) => setImage(e.target.files[0])}
            >
            </input>
            <button onClick={uploadImage}>Upload</button>
        </div>
        <div>
            <h1>Uploaded image will be displayed here</h1>
            <img src={imageUrl}/>
        </div>
    </div>
)
}
export default SketchImage;