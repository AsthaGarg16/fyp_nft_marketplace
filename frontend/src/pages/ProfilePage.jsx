import { React, useState } from "react";
import DetailCard from "../components/DetailCard";
import ItemTable from "../components/ItemTable";

function CardsTab() {
  var items = [];
  for (var i = 0; i < 15; i++) {
    items.push(i);
  }
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-4 lg:grid-cols-3">
        {items.map((item) => (
          <DetailCard />
        ))}
      </div>
    </div>
  );
}

function ListTab() {
  const table = [
    {
      ItemImage: "",
      ItemName: "Name of Item",
      OfferPrice: "$299",
      Time: "2000",
    },
    {
      ItemImage: "",
      ItemName: "Name of Item",
      OfferPrice: "$299",
      Time: "2000",
    },
    {
      ItemImage: "",
      ItemName: "Name of Item",
      OfferPrice: "$299",
      Time: "2000",
    },
    {
      ItemImage: "",
      ItemName: "Name of Item",
      OfferPrice: "$299",
      Time: "2000",
    },
    {
      ItemImage: "",
      ItemName: "Name of Item",
      OfferPrice: "$299",
      Time: "2000",
    },
  ];

  return <ItemTable tableContent={table} />;
}

function ProfilePage() {
  const tabs = [
    "Collected",
    "Created",
    "Liked",
    "Offers Made",
    "Offers Received",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function changeTab(tabName) {
    if (activeTab === tabName) {
    } else {
      setActiveTab(tabName);
    }
  }
  return (
    <div>
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
          <div className="flex-auto justify-between">
            <div className="text-left">
              <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                Profile name
              </h2>
              <p className="text-xl text-gray-600 md:text-lg lg:text-xl dark:text-gray-300">
                Wallet address
              </p>
              <p className="text-xl text-gray-600 md:text-lg lg:text-xl dark:text-gray-300">
                Joining date
              </p>
            </div>
            <button
              type="button"
              className="relative rounded-lg p-2.5 inline-flex dark:fill-gray-300 dark:hover:bg-gray-600 dark:focus:fill-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fillColor="currentColor"
              >
                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
              </svg>
              <span className="sr-only">Edit</span>
            </button>
          </div>
        </div>
        <div className="m-5">
          <ul className="flex flex-wrap text-2xl font-medium text-center text-gray-500 border-b-2 border-gray-200 dark:border-gray-600 dark:text-gray-400">
            <div className="flex justify-items-start">
              {tabs.map((tab) => (
                <li className="mr-2">
                  <div
                    onClick={() => changeTab(tab)}
                    className={
                      "inline-block p-4 cursor-pointer text-indigo-500 rounded-t-lg active dark:text-white " +
                      (activeTab === tab
                        ? "bg-gray-100 dark:bg-gray-700 border-b-4 border-indigo-500"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700")
                    }
                  >
                    {tab}
                  </div>
                </li>
              ))}
            </div>
          </ul>
          {activeTab === "Collected" ||
          activeTab === "Created" ||
          activeTab === "Liked" ? (
            <CardsTab />
          ) : (
            <ListTab />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
