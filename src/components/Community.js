import React from "react";
import CommunityCard from "./CommunityCard";
import img1 from "../images/1.jpg";
import GalleryPlaceholder1 from "../images/gallery-placeholder1.png";
import GalleryPlaceholder2 from "../images/gallery-placeholder2.png";
import GalleryPlaceholder3 from "../images/gallery-placeholder3.png";
import GalleryPlaceholder4 from "../images/gallery-placeholder4.png";

const Community = () => {
  return (
    <>
      <div className="content-page">
        <div>
          <h1>Community artwork</h1>
          <h4>Most recent shown first:</h4>
          <div className="community-grid">
            <CommunityCard artwork={GalleryPlaceholder1} title="Tan Clouds" />
            <CommunityCard artwork={GalleryPlaceholder2} title="Weird Chess" />
            <CommunityCard artwork={GalleryPlaceholder3} title="Bullseye!" />
            <CommunityCard
              artwork={GalleryPlaceholder4}
              title="Spring in the City"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
