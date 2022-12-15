import React from "react";
import AnimatedImage from "./AnimatedImage";
import Card from "./Card";

function DetailCard() {
  return (
    <div className="card-custom w-full max-w-xs bg-white rounded-xl shadow-md dark:bg-gray-700">
      <div className="flex justify-center">
        <div className="card-zoom">
          <AnimatedImage />
        </div>
      </div>

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>

        <div className="flex items-center mt-2.5 mb-2.5"></div>
        <div className="grid grid-cols-2">
          <div>
            <span className="text-3xl grid justify-items-start font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </div>

          <div className="grid grid-cols-2 justify-items-end">
            <button
              type="button"
              className="text-white bg-gray-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2 text-center inline-flex items-center dark:bg-gray-350 dark:hover:bg-indigo-500 dark:focus:ring-indigo-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="-4 -4 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>

              <span className="sr-only">Like</span>
            </button>
            <button
              type="button"
              className="text-white bg-gray-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2 text-center inline-flex items-center dark:bg-gray-350 dark:hover:bg-indigo-500 dark:focus:ring-indigo-400"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>

              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
