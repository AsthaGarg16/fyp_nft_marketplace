import React from "react";
// import nft from "../assets/nft.png";

function Home() {
  return (
    // <div class="flex items-center min-h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="card-zoom">
        <div class="card-zoom-image">
          <img
            src={require("../assets/nft.jpg")}
            alt="nft"
            class="object-cover h-72 w-96"
          />
        </div>

        <button
          type="button"
          class="absolute bottom-2 right-2 z-50 text-blue-700 border border-blue-700 bg-white bg-opacity-50 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
      </div>

      <div class="card-zoom">
        <div class="card-zoom-image">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">FIAT</h1>
      </div>

      <div class="card-zoom">
        <div class="card-zoom-image ">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">VAN</h1>
      </div>

      <div class="card-zoom">
        <div class="card-zoom-image">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">MINI</h1>
      </div>
    </div>
    // </div>
  );
}

export default Home;
