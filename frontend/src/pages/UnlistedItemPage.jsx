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
import { useNavigate } from "react-router-dom";

function UnlistedItemPage() {
  const navigate = useNavigate();
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

  function GoToListPage(collectionName) {
    //go to collection
    navigate("/list");
  }

  const table = [
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
    },
    {
      Price: "$299",
      FloorDifference: "2% below",
      From: "User name / address",
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
              src={require("../assets/nft9.jpg")}
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
              This is the first painting showing the abtracts effect of yellow
              colors.
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
            <AttributeCard category={"Color"} value={"Yellow"} />
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
              This will be the description of the item listed
            </p>
          </div>
        </div>
        <div className="text-left w-1/2 m-5">
          <p className="dark:text-indigo-400 text-indigo-700 text-2xl mb-5 mt-5 font-semibold">
            Abstract
          </p>
          <p className="dark:text-white text-black font-bold text-4xl tracking-wide mb-1">
            Painting1
          </p>
          <p className="dark:text-gray-300 text-gray-700 text-xl mb-5">
            owned by You
          </p>
          <div className="flex w-full mr-5 items-center">
            <EyeIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mr-3" />
            <p className="text-gray-800 dark:text-gray-200">0 views</p>
            <HeartIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mx-3" />
            <p className="text-gray-800 dark:text-gray-200">0 favourties</p>
          </div>
          <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
            <hr class="h-0.5 bg-gray-600 border-0 dark:bg-gray-600"></hr>
            <div className="px-4 my-2">
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                Current price
              </p>
              <p className="dark:text-white text-black font-bold text-4xl tracking-wide mb-4">
                0.02 ETH
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
                  onClick={GoToListPage}
                >
                  <ShoppingCartIcon className="h-8 w-8 mr-5" />
                  List Item
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
        <p className="text-md text-gray-800 dark:text-gray-200 m-2 text-left"></p>
      </div>
    </div>
  );
}

export default UnlistedItemPage;
