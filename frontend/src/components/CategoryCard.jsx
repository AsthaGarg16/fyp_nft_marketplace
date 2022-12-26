import React from "react";

function CategoryCard(props) {
  function GoToCollection(collectionName) {
    //go to collection
  }
  return (
    <div
      className="w-[28rem] h-96 mb-5 bg-white rounded-xl shadow-lg dark:bg-gray-700 hover:cursor-pointer"
      onClick={() => GoToCollection}
    >
      <div className="overflow-hidden ">
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-cover rounded-t-xl w-[30rem] h-80 hover:scale-150 ease-in duration-300"
        />
      </div>

      <div className="text-center p-3 space-x-5">
        <h5 className="text-3xl items-center font-semibold  text-center text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </div>
    </div>
  );
}

export default CategoryCard;
