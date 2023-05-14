import { useScrollTo } from "../components/Scroll";

import { useMoralis, useWeb3Contract } from "react-moralis";
import contractAddresses from "../constants/contractAddresses.json";
import marketplaceAbi from "../constants/NftMarketplace.json";
import nftAbi from "../constants/Basic_Nft.json";
import { ethers } from "ethers";

function ListPage(nftAddress, tokenId, quantity) {
  const { chainId } = useMoralis();
  const { runContractFunction } = useWeb3Contract();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = contractAddresses["5"]["NftMarketplace"][1];

  //check is msg.sender is the owner and if it is listed, display buttons accordingly (to buy, add to cart)

  useScrollTo(0, 0);

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    let formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    //call listItemForSale
  }

  async function approveAndList() {
    console.log("Approving...");
    const nftAddress = "0x61bD8747Fa57F4E8A73D0a5B91827a43e50Fc9Cf";
    const tokenId = "1";
    const price = ethers.utils.parseUnits("0.02", "ether").toString();

    const approveOptions = {
      abi: nftAbi,
      contractAddress: nftAddress,
      functionName: "approve",
      params: {
        to: marketplaceAddress,
        tokenId: tokenId,
      },
    };

    await runContractFunction({
      params: approveOptions,
      onSuccess: (tx) => handleApproveSuccess(tx, nftAddress, tokenId, price),
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function handleApproveSuccess() {}

  async function listItemForSale(json) {
    const listing = {
      abi: marketplaceAbi,
      contractAddress: marketplaceAddress,
      functionName: "listItem",
      params: {
        _nftAddress: nftAddress,
        _tokenId: tokenId,
        _quantity: quantity,
        _payToken: json.payToken,
        _pricePerItem: json.price,
        _startingTime: new Date().toLocaleString() + "",
      },
    };

    await runContractFunction({
      params: listing,
      onSuccess: (tx) => handleListSuccess(tx, marketplaceAddress),
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function handleListSuccess() {
    //change page to listing
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <form method="post" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <h1 className="mb-4 text-5xl font-bold leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white text-left">
              List Item for sale
            </h1>
            <div className="m-10">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Type
              </label>
              <label
                for="Toggle3"
                className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
              >
                <input
                  id="Toggle3"
                  name="type"
                  type="checkbox"
                  className="hidden peer"
                />
                <span className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300">
                  Fixed Price
                </span>
                <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400">
                  Timed Auction
                </span>
              </label>
            </div>
            <div className="m-10 text-left">
              <label
                htmlFor="price"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Price
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  value={0.02}
                  name="price"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"
                ></input>
              </div>
            </div>

            <div className="m-10 text-left">
              <label
                htmlFor="fees"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Fees
              </label>
              <div className="flex flex-col items-start">
                <p className="text-md text-gray-800 dark:text-gray-400">
                  Service Fees 1.0%
                </p>
                <p className="text-md text-gray-800 dark:text-gray-400">
                  Creator Fees 3.0%
                </p>
              </div>
            </div>
          </div>
        </form>

        <div className="col-span-1 m-10">
          <label
            htmlFor="Preview"
            className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
          >
            Preview
          </label>
          <img
            src={require("../assets/nft9.jpg")}
            alt="nft"
            className="object-contain rounded-xl"
          />
        </div>
      </div>
      <button
        className="p-5 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 text-white mt-10"
        type="submit"
        onClick={approveAndList}
      >
        List Item
      </button>
    </div>
  );
}

export default ListPage;
