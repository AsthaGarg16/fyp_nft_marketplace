import { StarIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import CollectionTab from "../components/CollectionTab";
import SupportModal from "./SupportModal";

function CollectionPage() {
  const [showModal, setShowModal] = useState(false);

  function showSupportModal() {
    setShowModal(true);
    console.log(showModal);
  }

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <SupportModal handleClose={closeModal} show={showModal} />
      <div>
        <img
          src={require("../assets/nft.jpg")}
          alt="nft"
          className="object-cover w-full h-96 rounded-b-xl"
        />
        <div className="flex items-center">
          <img
            className="flex-none w-40 h-40 object-cover rounded-full shadow-lg border-6 m-5 dark:border-gray-800 border-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Bonnie"
          />
          <div className="flex-auto">
            <div className="text-left">
              <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                Nature Love
              </h2>
              <p className="text-3xl text-gray-700 md:text-lg lg:text-xl dark:text-gray-200">
                by User12
              </p>
              <p className="text-3xl text-gray-700 md:text-lg lg:text-xl dark:text-gray-200">
                {"Items 100 Created Dec 2022 Creator Fee 3% Category music"}
              </p>
            </div>
          </div>
          <div className="flex justify-self-end self-start m-6">
            <div className="flex">
              <p className="text-2xl text-gray-700 md:text-lg lg:text-xl dark:text-gray-200 self-center mx-5">
                {"11.2K"}
              </p>
              <button className="mx-3 text-white font-medium text-xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-3 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800">
                Follow
              </button>
              <button
                onClick={() => showSupportModal()}
                className="mx-3 text-white font-medium text-xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-3 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
              >
                Support
              </button>
            </div>
            <button
              type="button"
              className="rounded-full p-2 text-gray-800 dark:text-gray-400 dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="rounded-full p-2 text-gray-800 dark:text-gray-400 dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
            >
              <StarIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-gray-800 dark:text-gray-400 dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
            >
              <ShareIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <p className="text-xl w-3/4 text-left m-5 text-gray-800 dark:text-gray-200">
          This limited edition collection features a Lady Llama & Laid Back
          Llama collectors NFT where all proceeds will go to benefiting the LBL
          Scholarship program.
        </p>
        <div className="flex mb-10">
          <div className="mr-5">
            <p className="text-2xl font-bold text-left ml-5 text-black dark:text-white">
              {"<1ETH"}
            </p>
            <p className="text-md text-left ml-5 text-gray-700 dark:text-gray-300">
              total volume
            </p>
          </div>
          <div className="mr-5">
            <p className="text-2xl font-bold text-left ml-5 text-black dark:text-white">
              {"0.1ETH"}
            </p>
            <p className="text-md text-left ml-5 text-gray-700 dark:text-gray-300">
              floor price
            </p>
          </div>
          <div className="mr-5">
            <p className="text-2xl font-bold text-left ml-5 text-black dark:text-white">
              {"0.2ETH"}
            </p>
            <p className="text-md text-left ml-5 text-gray-700 dark:text-gray-300">
              best price
            </p>
          </div>
          <div className="mr-5">
            <p className="text-2xl font-bold text-left ml-5 text-black dark:text-white">
              {"23"}
            </p>
            <p className="text-md text-left ml-5 text-gray-700 dark:text-gray-300">
              owners
            </p>
          </div>
          <div className="mr-5">
            <p className="text-2xl font-bold text-left ml-5 text-black dark:text-white">
              {"68%"}
            </p>
            <p className="text-md text-left ml-5 text-gray-700 dark:text-gray-300">
              unique owners
            </p>
          </div>
        </div>
        <div className="m-5">
          <CollectionTab />
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
