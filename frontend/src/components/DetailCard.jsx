import React from "react";
import AnimatedImage from "./AnimatedImage";

function DetailCard() {
  return (
    <div className="card-custom w-full max-w-xs bg-white rounded-xl shadow-md dark:bg-gray-700">
      <div className="flex justify-center">
        <div className="card-zoom">
          <div className="card-zoom-image">
            <img
              src={require("../assets/nft.jpg")}
              alt="nft"
              className="object-cover h-72 w-96"
            />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS
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
                className="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                fill="currentColor"
                // fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
                  // fill-rule="nonzero"
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
