import React from 'react';
import img1 from "../images/1.jpg";

const Community = () => {

  return (
      <>
    <div style={{textAlign:"center"}}>
      <div>
          <h1> Community page</h1>
          <div>
          <img src={img1} width="300" height="300"/>
          </div>
          <div>
            <h1>Caption</h1>
            <input
            type= "text"
            placeholder="write a comment..."
            />
          </div>
          <button>Comment</button>
          <button>Share</button>
          <button>Like</button>

      </div>
    </div>
    </>
  )
}

export default Community