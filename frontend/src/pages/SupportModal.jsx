import { React, useState } from "react";

function SupportModal({ show, handleClose }) {
  const [amount, setAmount] = useState("0 ETH");
  function UpdateAmount(event) {
    setAmount("0.05 ETH");
  }
  const divClass =
    "bg-gray-800/75 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " +
    (show ? "" : "hidden");
  return (
    <div id="cart-modal" className={divClass}>
      <div className="relative w-1/2 h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white text-center">
              Support creator
            </h3>
            <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="mt-5 text-left">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 dark:text-gray-200 "
              >
                Enter the amount
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400 text-left">
                Show your support to the creator.
              </p>
              <div className="flex flex-col items-start text-left">
                <input
                  type="text"
                  name="external link"
                  onBlur={UpdateAmount}
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
                />
              </div>
            </div>
            <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="grid grid-cols-2 mb-5">
              <p className="font-semibold mt-3 text-2xl dark:text-gray-100 text-gray-900 justify-self-start">
                Total
              </p>
              <button className="font-semibold mt-3 text-2xl dark:text-gray-100 text-gray-900 justify-self-end">
                {amount}
              </button>
            </div>
            <button className="text-white text-center center font-medium text-xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-6 py-3 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800">
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportModal;
