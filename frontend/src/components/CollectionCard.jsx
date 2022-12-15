import React from "react";

function CollectionCard() {
  return (
    <div class="w-96 h-72 bg-white rounded-xl shadow-md dark:bg-gray-700 ">
      <div className="overflow-hidden ">
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-cover rounded-t-lg w-96 h-48 max-w-96 max-h-48 hover:scale-150 ease-in duration-300"
        />
      </div>

      <div className="flex items-center p-3 space-x-5">
        <img
          class="w-16 h-16 object-cover rounded-xl shadow-lg border-4 border-white dark:border-gray-400"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Bonnie image"
        />
        <div class="text-left items-center">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Collection name
          </h5>
          <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            by User
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
