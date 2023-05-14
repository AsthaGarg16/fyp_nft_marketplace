import { TrashIcon } from "@heroicons/react/20/solid";
import { React } from "react";

function CartItemList() {
  return (
    <div className="grid grid-cols-8 gap-4 dark:hover:bg-gray-600 p-2 rounded-lg hover:bg-gray-400">
      <div className="col-span-1">
        <img
          className="w-18 h-24 object-cover rounded-lg shadow-lg "
          src={require("../assets/nft.jpg")}
          alt="Profile"
        />
      </div>
      <div className="col-span-5 justify-self-start text-left self-center">
        <p className="font-bold text-xl dark:text-white text-gray-900">
          Party Ape
        </p>
        <p className="font-bold text-xl dark:text-white text-gray-900">Apes</p>
        <p className="text-lg dark:text-gray-300 text-gray-700">0.1%</p>
      </div>
      <div className="col-span-1 justify-self-end text-right self-center">
        <p className="font-bold text-xl dark:text-white text-gray-900">
          0.58 ETH
        </p>
      </div>
      <div className="col-span-1 justify-self-center self-center">
        <button
          type="button"
          className="relative rounded-lg p-2.5 text-gray-800 dark:text-gray-300 inline-flex dark:fill-gray-300 dark:hover:bg-gray-500 dark:focus:fill-gray-100"
        >
          <TrashIcon className="h-6 w-6 stroke-2" />
        </button>
      </div>
    </div>
  );
}

function CartModal({ show, handleClose }) {
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
            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Your cart
            </h3>
            <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="grid grid-cols-2 mb-5">
              <p className="font-medium mt-3 text-xl dark:text-gray-100 text-gray-900 justify-self-start">
                1 item
              </p>
              <button className="font-medium mt-3 text-xl dark:text-gray-100 text-gray-900 justify-self-end">
                Clear All
              </button>
            </div>
            <CartItemList />
            <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="grid grid-cols-2 mb-5">
              <p className="font-semibold mt-3 text-2xl dark:text-gray-100 text-gray-900 justify-self-start">
                Total Price
              </p>
              <button className="font-semibold mt-3 text-2xl dark:text-gray-100 text-gray-900 justify-self-end">
                0.58 ETH
              </button>
            </div>
            <button className="text-white font-medium text-xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-6 py-3 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800">
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
