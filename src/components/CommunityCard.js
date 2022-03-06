import GalleryPlaceholder1 from "../images/gallery-placeholder1.png";
import GalleryPlaceholder2 from "../images/gallery-placeholder2.png";
import GalleryPlaceholder3 from "../images/gallery-placeholder3.png";
import GalleryPlaceholder4 from "../images/gallery-placeholder4.png";
import "../App.css";

const CommunityCard = (props) => {
  console.log(props.artwork);
  return (
    <>
      <div className="community-grid-cell">
        <img src={props.artwork} />
        <div className="community-info-box">
          <div className="community-buttons">
            <p>Title: {props.title}</p>
            <div>
              <button>Share</button>
              <button>Like</button># likes
            </div>
          </div>
          <div className="community-comments">
            <input
              type="text"
              placeholder="write a comment..."
              style={{ marginBottom: "20px" }}
            />
            <button>Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
