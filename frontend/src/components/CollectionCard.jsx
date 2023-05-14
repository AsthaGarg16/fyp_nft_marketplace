import React from "react";
import { useNavigate } from "react-router-dom";

function CollectionCard() {
  const navigate = useNavigate();
  function GoToCollection(collectionName) {
    //go to collection
    navigate("/collection");
  }
  return (
    <div
      className="w-96 h-72 bg-white rounded-xl shadow-lg dark:bg-gray-700 hover:cursor-pointer"
      onClick={() => GoToCollection("collection")}
    >
      <div className="overflow-hidden ">
        <img
          src={require("../assets/banner_collection.jpg")}
          alt="nft"
          className="object-cover rounded-t-xl w-96 h-48 max-w-96 max-h-48 hover:scale-150 ease-in duration-300"
        />
      </div>

      <div className="flex items-center p-3 space-x-5">
        <img
          className="w-16 h-16 object-cover rounded-xl shadow-lg border-4 border-white dark:border-gray-400"
          src={require("../assets/logo_collection.jpeg")}
          alt="Bonnie"
        />
        <div className="text-left items-center">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Abstract
          </h5>
          <p className="mb-2 font-base text-lg text-gray-700 dark:text-gray-300">
            by Pasta
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
