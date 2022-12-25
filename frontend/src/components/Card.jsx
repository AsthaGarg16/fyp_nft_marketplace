import React from "react";

function Card() {
  return (
    <div className="card-zoom">
      <div className="card-zoom-image">
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-fill w-[24rem] h-[28rem]"
        />
      </div>
      <div className="flex">
        <p className="absolute bottom-2 right-50 z-50 text-white font-medium text-md p-2.5 text-left">
          Name of collection
        </p>
        <p className="absolute bottom-2 right-2 z-50 text-white text-md p-2.5 text-left">
          Floor price: 0.2 ETH
        </p>
      </div>
    </div>
  );
}

export default Card;
