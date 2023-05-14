import React from "react";

import { useNavigate } from "react-router-dom";

function Card(props) {
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
          src={props.source}
          alt="nft"
          className="object-cover w-[24rem] h-[28rem]"
        />
      </div>
      <div className="flex">
        <p className="m-2 self-end z-50 text-white font-medium text-xl p-2.5 text-left">
          {props.collectionName}
        </p>
        <p className="m-2 self-end justify-self-end z-50 text-white text-xl p-2.5 text-right">
          {props.price + "ETH"}
        </p>
      </div>
    </div>
  );
}

export default Card;
