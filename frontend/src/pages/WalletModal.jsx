import { TrashIcon } from "@heroicons/react/20/solid";
import { React } from "react";

function WalletModal({ show, handleClose }) {
  const divClass =
    "bg-gray-800/75 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " +
    (show ? "" : "hidden");
  return (
    <div id="wallet-modal" className={divClass}>
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
          <div className="px-6 py-6 lg:px-8 content-center ">
            <div className="flex item-center text-center">
              <img
                className="w-14 h-14 mx-3 object-cover rounded-full shadow-lg place-self-center"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
              <h3 className="mb-4 text-3xl mx-3 font-bold text-gray-900 dark:text-white place-self-center">
                Your wallet
              </h3>
              <p className="mx-3 text-lg text-gray-600 dark:text-gray-400 place-self-center">
                Address wallet
              </p>
            </div>

            <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="m-3">
              <div className=" border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5">
                <p className="my-3 text-2xl text-gray-700 dark:text-gray-300 text-center">
                  Total Funds
                </p>
                <h4 className="mb-4 text-3xl mx-3 font-bold text-gray-900 dark:text-white text-center">
                  $0.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
