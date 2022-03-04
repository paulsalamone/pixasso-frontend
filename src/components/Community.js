import React from "react";
import img1 from "../images/1.jpg";

const Community = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          <h1> Community page</h1>
          <div>
            <img src={img1} width="300" height="300" />
          </div>
          <div>
            <h3>Caption:</h3>
            <input
              type="text"
              placeholder="write a comment..."
              style={{ marginBottom: "20px" }}
            />
          </div>
          <button>Comment</button>
          <button>Share</button>
          <button>Like</button>
        </div>
      </div>
    </>
  );
};

export default Community;
