import React from "react";
import placeholder from "../assets/placeholder.mp4";
const Video = () => (
  <div>
    <h1 className="pageHeader">Video</h1>

    <div className="demoVid" align="center">
      <video width="800" height="500" controls>
        <source src={placeholder} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default Video;
