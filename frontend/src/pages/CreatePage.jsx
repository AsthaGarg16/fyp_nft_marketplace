import {
  ChartBarIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
  LockClosedIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import contractAddresses from "../constants/contractAddresses.json";
import { sendFileToIPFS, sendJSONtoIPFS } from "../queries/Pinata";
import nftAbi from "../constants/Basic_Nft.json";

function PropertiesModal({ handleClose, show, propertiesData }) {
  const [rows, setRows] = useState(propertiesData);
  const addRow = () => {
    rows.push({ name: "", type: "" });
  };

  const addValue = (e) => {
    if (e.target.id.split(" ")[0] === "type") {
      let newRows = rows;
      newRows[e.target.id.split(" ")[1]] = {
        name: rows[e.target.id.split(" ")[1]].name,
        type: e.target.value,
      };
      setRows(newRows);
    } else {
      let newRows = rows;
      newRows[e.target.id.split(" ")[1]] = {
        name: e.target.value,
        type: rows[e.target.id.split(" ")[1]].type,
      };
      setRows(newRows);
    }
    console.log(e.target.value);
  };

  const saveAndExit = () => {
    handleClose(rows);
  };

  const divClass =
    "bg-gray-800/75 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " +
    (show ? "" : "hidden");
  return (
    <div id="properties-modal" className={divClass}>
      <div className="relative w-1/2 h-full md:h-auto">
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
              Add properties
            </h3>
            <p className="text-left text-lg dark:text-gray-200">
              Properties show up underneath your item, are clickable, and can be
              filtered in your collection's sidebar.
            </p>
            <form className="space-y-6 mt-10 justify-self-center" action="#">
              <div className="grid grid-cols-7 gap-4">
                <div className="col-span-3">
                  <p className="text-left text-xl font-semibold dark:text-white">
                    Type
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-left text-xl font-semibold dark:text-white">
                    Name
                  </p>
                </div>
              </div>
              {rows.map((item, index) => (
                <div className="grid grid-cols-7 gap-4">
                  <div className="col-span-3">
                    <input
                      id={"type " + index}
                      name="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="character"
                      required
                      onBlur={addValue}
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      id={"name " + index}
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="male"
                      required
                      onBlur={addValue}
                    />
                  </div>
                  <div className="col-span-1 place-items-center">
                    <button
                      type="button"
                      className="relative rounded-lg p-2.5 text-gray-800 dark:text-gray-300 inline-flex dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
                    >
                      <TrashIcon className="h-7 w-7 stroke-2" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-items-startr">
                <button
                  className="dark:text-gray-200 text-gray-800 font-medium text-2xl dark:bg-gray-600 rounded-lg bg-gray-300 dark:hover:bg-gray-500 hover:bg-gray-400 px-5 py-2 "
                  onClick={addRow}
                >
                  Add more
                </button>
              </div>

              <button
                type="submit"
                onClick={saveAndExit}
                className="text-white font-medium text-2xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-5 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function LevelsModal({ handleClose, show, levelsData }) {
  const [rows, setRows] = useState(levelsData);
  const addRow = () => {
    rows.push({ name: "", value1: "", value2: "" });
  };

  const addValue = (e) => {
    if (e.target.id.split(" ")[0] === "name") {
      let newRows = rows;
      newRows[e.target.id.split(" ")[1]] = {
        name: e.target.value,
        value1: rows[e.target.id.split(" ")[1]].value1,
        value2: rows[e.target.id.split(" ")[1]].value2,
      };
      setRows(newRows);
    } else if (e.target.id.split(" ")[0] === "value1") {
      let newRows = rows;
      newRows[e.target.id.split(" ")[1]] = {
        name: rows[e.target.id.split(" ")[1]].name,
        value1: e.target.value,
        value2: rows[e.target.id.split(" ")[1]].value2,
      };
      setRows(newRows);
    } else {
      let newRows = rows;
      newRows[e.target.id.split(" ")[1]] = {
        name: rows[e.target.id.split(" ")[1]].name,
        value1: rows[e.target.id.split(" ")[1]].value1,
        value2: e.target.value,
      };
      setRows(newRows);
    }
  };

  const saveAndExit = () => {
    handleClose(rows);
  };

  const divClass =
    "bg-gray-800/75 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " +
    (show ? "" : "hidden");
  return (
    <div id="levels-modal" className={divClass}>
      <div className="relative w-1/2 h-full md:h-auto">
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
              Add levels
            </h3>
            <p className="text-left text-lg dark:text-gray-200">
              Levels show up underneath your item, are clickable, and can be
              filtered in your collection's sidebar.
            </p>
            <form className="space-y-6 mt-10 justify-self-center" action="#">
              <div className="grid grid-cols-7 gap-4">
                <div className="col-span-3">
                  <p className="text-left text-xl font-semibold dark:text-white">
                    Name
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-left text-xl font-semibold dark:text-white">
                    Value
                  </p>
                </div>
              </div>
              {rows.map((item, index) => (
                <div className="grid grid-cols-7 gap-4">
                  <div className="col-span-3">
                    <input
                      id={"name " + index}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="speed"
                      required
                      onBlur={addValue}
                    />
                  </div>
                  <div className="col-span-3 flex">
                    <input
                      id={"value1 " + index}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="3"
                      required
                      onBlur={addValue}
                    />
                    <p className="text-xl mx-5 my-2 text-center dark:text-gray-300 text-gray-700">
                      of
                    </p>
                    <input
                      id={"value2 " + index}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="5"
                      required
                      onBlur={addValue}
                    />
                  </div>
                  <div className="col-span-1 place-items-center">
                    <button
                      type="button"
                      className="relative rounded-lg p-2.5 text-gray-800 dark:text-gray-300 inline-flex dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
                    >
                      <TrashIcon className="h-7 w-7 stroke-2" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-items-startr">
                <button
                  onClick={addRow}
                  className="dark:text-gray-200 text-gray-800 font-medium text-2xl dark:bg-gray-600 rounded-lg bg-gray-300 dark:hover:bg-gray-500 hover:bg-gray-400 px-5 py-2 "
                >
                  Add more
                </button>
              </div>

              <button
                type="submit"
                onClick={saveAndExit}
                className="text-white font-medium text-2xl bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg px-5 py-2 text-center dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreatePage() {
  const { chainId, account, isWeb3Enabled } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress =
    contractAddresses[chainString]["NftMarketplace"][1];
  const nftAddress = contractAddresses[chainString].Basic_Nft[1];

  const [enabled, setEnabled] = useState(false);
  const [showProperties, setShowProperties] = useState(false);
  const [showLevels, setShowLevels] = useState(false);

  const [properties, setProperties] = useState([{ name: "", type: "" }]);
  const [levels, setLevels] = useState([{ name: "", value1: "", value2: "" }]);

  const { runContractFunction } = useWeb3Contract();

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    let formJson = Object.fromEntries(formData.entries());
    formJson["Properties"] = properties;
    formJson["Levels"] = levels;
    console.log(formJson);
  }

  function showPropertiesModal() {
    setShowProperties(true);
    console.log(showProperties);
  }

  const closeProperties = (propertiesData) => {
    setProperties(propertiesData);
    setShowProperties(false);
  };

  function showLevelsModal() {
    setShowLevels(true);
    console.log(showLevels);
  }

  const closeLevels = (levelsData) => {
    setLevels(levelsData);
    setShowLevels(false);
  };

  async function mintNFT(json1, json2) {
    const imgHash = sendFileToIPFS(json1.file);
    var infoHash;
    if (json2) {
      infoHash = sendJSONtoIPFS(json2);
    }
    const mint = {
      abi: nftAbi,
      contractAddress: nftAddress,
      functionName: "mintNft",
      params: {
        assetUri: imgHash,
        metadataUri: infoHash,
      },
    };

    await runContractFunction({
      params: mint,
      onSuccess: (tx) => handleMintSuccess(tx, nftAddress),
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function handleMintSuccess() {
    //ask for approval
    //listitem
    //go to listing page
  }

  return (
    <div>
      <h1 className="mb-10 mx-5 mt-5 text-black text-5xl font-bold dark:text-white text-left">
        Create New Item
      </h1>
      <PropertiesModal
        handleClose={closeProperties}
        show={showProperties}
        propertiesData={properties}
      />
      <LevelsModal
        handleClose={closeLevels}
        show={showLevels}
        levelsData={levels}
      />
      <form method="post" onSubmit={handleSubmit}>
        <div className="m-10 flex justify-between">
          <div className="overflow-x-auto w-6/12 m-5 relative text-left">
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
                External Link
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                We will include a link to this URL on this item's detail page,
                so that users can click to learn more about it. You are welcome
                to link to your own webpage with more details.
              </p>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="external link"
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
                Price
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="price"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-6/12 m-5 relative text-left">
            <div>
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Image, Video, Audio, or 3D Model
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </p>
              <div className="flex flex-col items-center mt-5">
                <div className="flex items-center justify-center w-1/2 h-44">
                  <label
                    hmtlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 mt-5">
                      <CloudArrowUpIcon
                        className="h-12 w-12 stroke-2 fill-gray-500"
                        aria-hidden="true"
                      />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      name="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Collection
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                This is the collection where your item will appear.
              </p>
              <div className="flex flex-col items-start">
                <select
                  name="collection"
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
                Supply
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                The number of items that can be minted. No gas cost to you!
              </p>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="supply"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 justify-between">
          <h1 className="mx-5 mt-5 text-black text-3xl font-semibold text-gray-900 dark:text-gray-100 text-left">
            Other details
          </h1>
          <div className="flex justify-between">
            <div className="overflow-x-auto w-6/12 m-5 relative text-left">
              <div
                onClick={() => showPropertiesModal()}
                className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600 hover:cursor-pointer"
              >
                <ListBulletIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Properties
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Textual traits that show up as rectangles
                  </p>
                </div>
                {/* <button className="dark:bg-gray-600 rounded-lg p-3 dark:hover:bg-gray-500">
                  <PlusIcon className="h-8 w-8 stroke-2 dark:fill-gray-200" />
                </button> */}
              </div>
              <div
                onClick={() => showLevelsModal()}
                className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600 hover:cursor-pointer"
              >
                <ChartBarIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Levels
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Numerical traits that show as a progress bar
                  </p>
                </div>
                {/* <button className="dark:bg-gray-600 rounded-lg p-3 dark:hover:bg-gray-500">
                  <PlusIcon className="h-8 w-8 stroke-2 dark:fill-gray-200" />
                </button> */}
              </div>
            </div>
            <div className="overflow-x-auto w-6/12 m-5 relative text-left">
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <LockClosedIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Unlocked for followers
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Followers get early access to the item.
                  </p>
                </div>
                <switch
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
                  className={`${enabled ? "bg-indigo-600" : "bg-gray-500"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </switch>
              </div>
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <ExclamationTriangleIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Explicit & Sensitive Content
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Set this item as explicit and sensitive content
                  </p>
                </div>
                <switch
                  checked="true"
                  onChange={() => setEnabled(!enabled)}
                  className={`${true ? "bg-indigo-600" : "bg-gray-500"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${true ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </switch>
              </div>
            </div>
          </div>
        </div>
        <button
          className="p-5 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 text-white"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
export default CreatePage;
