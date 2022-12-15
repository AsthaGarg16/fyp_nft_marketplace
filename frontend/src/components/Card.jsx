import React from "react";
import AnimatedImage from "./AnimatedImage";

function Card() {
  return (
    <div className="card-zoom">
      <AnimatedImage />

      <button
        type="button"
        className="absolute bottom-2 right-2 z-50 text-indigo-500 bg-white bg-opacity-90 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-500"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
            fill-rule="nonzero"
          />
        </svg>
        <span className="sr-only">Add to liked</span>
      </button>
    </div>
  );
}

export default Card;
