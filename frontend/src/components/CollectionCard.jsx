import React from "react";

function CollectionCard() {
  return (
    <div class="max-w-md max-h-96 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-contain rounded-t-lg max-w-md max-h-64"
        />
        <img
          class="w-14 h-14 rounded-full shadow-lg border-4 border-gray-800 dark:border-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Bonnie image"
        />
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Collection name
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">by User</p>
      </div>
    </div>
  );
}

export default CollectionCard;
