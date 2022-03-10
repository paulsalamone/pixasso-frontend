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
