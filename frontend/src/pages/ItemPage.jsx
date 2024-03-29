import {
  ArrowsRightLeftIcon,
  Bars3Icon,
  BookmarkIcon,
  ClockIcon,
  DocumentTextIcon,
  EyeIcon,
  HeartIcon,
  IdentificationIcon,
  ListBulletIcon,
  PresentationChartLineIcon,
  ShoppingCartIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import Collapsible from "../components/Collapsible";
import { useScrollTo } from "../components/Scroll";
import { React, useState, useEffect } from "react";
import OfferTable from "../components/OfferTable";
import AttributeCard from "../components/AttributeCard";
import PriceChart from "../components/PriceChart";
function ItemPage() {
  //check is msg.sender is the owner and if it is listed, display buttons accordingly (to buy, add to cart)
  const [isOwned, setIsOwned] = useState(false);

  useEffect(() => {
    //set isOwned
  }, []);

  const heading = () => {
    return (
      <div className="flex">
        <ListBulletIcon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
        <p className="dark:text-gray-100 text-gray-900 text-xl">Offers</p>
      </div>
    );
  };

  const table = [
    {
      Price: "0.50ETH",
      FloorDifference: "0.55% below",
      From: "0x4534239465",
    },
    {
      Price: "0.48ETH",
      FloorDifference: "0.57% below",
      From: "0x2435326465",
    },
    {
      Price: "0.47ETH",
      FloorDifference: "0.56% below",
      From: "0x2435435465",
    },
    {
      Price: "0.43ETH",
      FloorDifference: "0.6% below",
      From: "0x2345459465",
    },
    {
      Price: "0.41ETH",
      FloorDifference: "0.87% below",
      From: "0x3326765465",
    },
    {
      Price: "0.36ETH",
      FloorDifference: "1.0% below",
      From: "0x2234239465",
    },
    {
      Price: "0.34ETH",
      FloorDifference: "1.1% below",
      From: "0x2234239465",
    },
    {
      Price: "0.30ETH",
      FloorDifference: "1.23% below",
      From: "0x2364239465",
    },
  ];

  const offersContent = () => {
    return <OfferTable tableContent={table} />;
  };

  useScrollTo(0, 0);
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 m-5">
          <div>
            <img
              src={require("../assets/nft.jpg")}
              alt="nft"
              className="object-contain rounded-xl"
            />
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <div className="flex items-center mb-3 px-3">
              <Bars3Icon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
              <p className="dark:text-gray-100 text-gray-900 text-xl">
                Description
              </p>
            </div>
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left">
              This is inspired by the famous bored ape yatch club
            </p>
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <div className="flex items-center mb-3 px-3">
              <BookmarkIcon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
              <p className="dark:text-gray-100 text-gray-900 text-xl">
                Attributes
              </p>
            </div>
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <AttributeCard category={"Shirt"} value={"black"} />
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <div className="flex items-center mb-3 px-3">
              <IdentificationIcon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
              <p className="dark:text-gray-100 text-gray-900 text-xl">
                Details
              </p>
            </div>
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left">
              Contract Address
            </p>
            <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left">
              Token Id
            </p>
            <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left">
              Owner
            </p>
          </div>
        </div>
        <div className="text-left w-1/2 m-5">
          <p className="dark:text-indigo-400 text-indigo-700 text-2xl mb-5 mt-5 font-semibold">
            Ape Bored Club
          </p>
          <p className="dark:text-white text-black font-bold text-4xl tracking-wide mb-1">
            Party Ape
          </p>
          <p className="dark:text-gray-300 text-gray-700 text-xl mb-5">
            owned by Apes
          </p>
          <div className="flex w-full mr-5 items-center">
            <EyeIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mr-3" />
            <p className="text-gray-800 dark:text-gray-200">23 views</p>
            <HeartIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mx-3" />
            <p className="text-gray-800 dark:text-gray-200">7 favourties</p>
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <div className="flex items-center mb-3 px-3">
              <ClockIcon className="h-8 w-8 stroke-gray-700 dark:fill-gray-300 dark:stroke-gray-300 mr-2" />
              <p className="dark:text-gray-100 text-gray-900 text-xl">
                Sale ends May 27, 2023 at 1:20 PM GMT+8
              </p>
            </div>
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="px-4 my-2">
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                Current price
              </p>
              <p className="dark:text-white text-black font-bold text-4xl tracking-wide mb-4">
                0.58 ETH
              </p>
              <div
                className={
                  isOwned
                    ? "hidden grid grid-cols-2 justify-items-stretch"
                    : "grid grid-cols-2 justify-items-stretch"
                }
              >
                <button
                  type="button"
                  className="text-white bg-indigo-600 font-medium rounded-xl text-xl px-5 py-2.5 text-center inline-flex items-center mr-2 hover:bg-indigo-700 dark:hover:bg-indigo-500"
                >
                  <ShoppingCartIcon className="h-8 w-8 mr-5" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-xl px-5 py-2.5 text-center inline-flex items-center mr-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  <TagIcon className="h-8 w-8 mr-5" />
                  Make offer
                </button>
              </div>
            </div>
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <div className="flex items-center mb-3 px-3">
              <PresentationChartLineIcon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
              <p className="dark:text-gray-100 text-gray-900 text-xl">
                Price History
              </p>
            </div>
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <PriceChart />
          </div>
          <Collapsible
            header={heading()}
            initialOpen={true}
            content={offersContent()}
          />
        </div>
      </div>
      <div className="mb-5 mx-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-3 dark:bg-gray-700/50">
        <div className="flex items-center mb-3 px-3">
          <ArrowsRightLeftIcon className="h-8 w-8 stroke-gray-700 fill-none dark:stroke-gray-300 mr-2" />
          <p className="dark:text-gray-100 text-gray-900 text-xl">
            Item Activity
          </p>
        </div>
        <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
        <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left">
          This will be the description of the item listed
        </p>
      </div>
    </div>
  );
}

export default ItemPage;
