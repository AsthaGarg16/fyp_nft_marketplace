import React, { useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import collectionAbi from "../constants/Collections.json";
import addresses from "../constants/contractAddresses.json";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import { sendFileToIPFS, sendJSONtoIPFS } from "../queries/Pinata";

function CreateCollection() {
  const { runContractFunction } = useWeb3Contract();
  const collectionAddress = addresses[5].Collections;
  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    let formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
    const logouri = sendFileToIPFS(formJson.logoImage);
    const bannerUri = sendFileToIPFS(formJson.bannerImage);
    let metadata = {
      url: formJson.url,
      description: formJson.description,
      links: formJson.links,
      paymentToken: formJson.paymentToken,
    };

    const metaUri = sendJSONtoIPFS(metadata);
    createCollection(formJson, logouri, bannerUri, metaUri);
  }

  async function createCollection(json, logoUri, bannerUri, metaUri) {
    const create = {
      abi: collectionAbi,
      contractAddress: collectionAddress,
      functionName: "createCollection",
      params: {
        name: json.name,
        logoImage: logoUri,
        bannerImage: bannerUri,
        earnings: json.creatorPercentage,
        category: json.category,
        metaInfoUri: metaUri,
      },
    };

    await runContractFunction({
      params: create,
      onSuccess: (tx) => handleCreateSuccess(tx, collectionAddress),
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function handleCreateSuccess() {}

  return (
    <div>
      <h1 className="mb-10 mx-5 mt-5 text-black text-5xl font-bold dark:text-white text-left">
        Create a collection
      </h1>
      <div className="text-left mx-80">
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Logo Image
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              File types supported: JPG, PNG, GIF, SVG
            </p>
            <div className="flex flex-col items-center mt-5">
              <div className="flex items-center w-1/2 h-48">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center w-48 h-48 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center pt-5 pb-6 mt-5">
                    <CloudArrowUpIcon
                      className="h-12 w-12 stroke-2 fill-gray-500"
                      aria-hidden="true"
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    name="logoImage"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Banner Image
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              File types supported: JPG, PNG, GIF, SVG
            </p>
            <div className="flex flex-col items-center mt-5">
              <div className="flex items-center  w-1/2 h-44">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center  w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center  pt-5 pb-6 mt-5">
                    <CloudArrowUpIcon
                      className="h-12 w-12 stroke-2 fill-gray-500"
                      aria-hidden="true"
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    name="bannerImage"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              URL
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              We will include a link to this URL on this item's detail page, so
              that users can click to learn more about it. You are welcome to
              link to your own webpage with more details.
            </p>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="url"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Description
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
            <div className="flex flex-col items-start">
              <textarea
                type="text"
                name="description"
                rows="5"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Category
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              This is the collection where your item will appear.
            </p>
            <div className="flex flex-col items-start">
              <select
                name="category"
                id="countries"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              >
                <option selected>Choose a collection</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Links
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="links"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Creator Earnings
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              Collection owners can collect creator earnings when a user
              re-sells an item they created. Contact the collection owner to
              change the collection earnings percentage or the payout address.
            </p>
            <div className="flex flex-row items-start">
              <input
                type="text"
                name="creatorAddress"
                className="w-3/4 pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
              <input
                type="text"
                name="creatorPercentage"
                className="w-1/4 pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
            >
              Payment Token
            </label>
            <p className="text-md text-gray-800 dark:text-gray-400">
              This token can be used to buy and sell your items.
            </p>
            <div className="flex flex-col items-start">
              <select
                name="paymentToken"
                id="countries"
                className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
              >
                <option selected>Choose a collection</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <button
            className="p-3 my-5 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 text-white"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCollection;
