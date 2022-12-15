import React from "react";

function AnimatedImage() {
  return (
    <div className="card-zoom-image">
      <img
        src={require("../assets/nft.jpg")}
        alt="nft"
        className="object-cover h-72 w-96"
      />
    </div>
  );
}
export default AnimatedImage;
