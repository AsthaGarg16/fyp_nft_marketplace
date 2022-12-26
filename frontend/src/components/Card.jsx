import React from "react";

import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  function GoToCollection(collectionName) {
    //go to collection
    navigate("/collection");
  }
  return (
    <div
      className="card-zoom hover:cursor-pointer"
      onClick={() => GoToCollection("collection")}
    >
      <div className="card-zoom-image">
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-cover w-[24rem] h-[28rem]"
        />
      </div>
      <div className="flex">
        <p className="m-2 self-end z-50 text-white font-medium text-xl p-2.5 text-left">
          Name of collection
        </p>
        <p className="m-2 self-end justify-self-end z-50 text-white text-xl p-2.5 text-right">
          0.2 ETH
        </p>
      </div>
    </div>
  );
}

export default Card;
