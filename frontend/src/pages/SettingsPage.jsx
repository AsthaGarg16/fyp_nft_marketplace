import { React, useState } from "react";

function ProfileSettings() {
  return (
    <div className="text-left">
      <p className="text-3xl font-semibold text-left mt-5 dark:text-white">
        Profile Details
      </p>
      <form className="mt-6">
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-gray-200">Username</span>
            <input
              type="text"
              name="name"
              className="

            w-full
            block px-4 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Enter username"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-gray-200">
              Email address
            </span>
            <input
              name="email"
              type="email"
              className="
            block
            w-full
            mt-2 px-4 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Enter email"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-gray-200">Bio</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className="mb-8">
          <button
            type="submit"
            className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function NotificationsSettings() {
  const LIST_ITEMS = [
    {
      title: "Item Sold",
      description: "When someone purchased one of your items",
    },
    {
      title: "Bid Activity",
      description: "When someone bids on one of your items",
    },
    {
      title: "Price Change",
      description: "When an item you made an offer on changes in price",
    },
    {
      title: "Auction Expiration",
      description: "When a timed auction you created ends",
    },
    {
      title: "Outbid",
      description: "When an offer you placed is exceeded by another user",
    },
    {
      title: "Successful Purchase",
      description: "When you successfully buy an item",
    },
  ];
  return (
    <div className="text-left">
      <p className="text-3xl font-semibold text-left mt-5 dark:text-white">
        Select which notifications you would like to recieve
      </p>
      <ul>
        {LIST_ITEMS.map((item) => (
          <div className="border-2 rounded-xl border-gray-500 m-5">
            <div className="flex items-center space-x-6 p-10">
              <div className="flex-shrink-0">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 accent-indigo-600 bg-gray-100 rounded-xl border-gray-300 focus:ring-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-200">
                  {item.title}
                </p>
                <p className="ml-2 text-lg text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

function EarningsSettings() {
  return (
    <div>
      <p className="text-3xl font-semibold text-left mt-5 dark:text-white">
        Earnings information
      </p>
    </div>
  );
}

function FeaturedItemsSettings() {
  return (
    <div>
      <p className="text-3xl font-semibold text-left mt-5 dark:text-white mb-5">
        Featured items
      </p>
      <p className="text-lg text-left text-gray-700 dark:text-gray-400">
        These items are featured on your profile page
      </p>
    </div>
  );
}

function SettingsPage() {
  const tabs = ["Profile", "Notifications", "Featured Items", "Earnings"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function changeTab(tabName) {
    if (activeTab === tabName) {
    } else {
      setActiveTab(tabName);
    }
  }
  return (
    <div className="mx-10 my-5">
      <p className="text-5xl font-semibold text-left mb-10 dark:text-white">
        Settings
      </p>
      <ul className="flex flex-wrap text-2xl font-medium text-center text-gray-500 border-b-2 border-gray-200 dark:border-gray-600 dark:text-gray-400">
        <div className="flex justify-items-start">
          {tabs.map((tab) => (
            <li className="mr-2">
              <div
                onClick={() => changeTab(tab)}
                className={
                  "inline-block p-4 cursor-pointer text-indigo-500 rounded-t-lg active dark:text-white  " +
                  (activeTab === tab
                    ? "bg-gray-100 dark:bg-gray-700 border-b-4 border-indigo-500"
                    : "")
                }
              >
                {tab}
              </div>
            </li>
          ))}
        </div>
      </ul>
      {activeTab === "Profile" ? (
        <ProfileSettings />
      ) : activeTab === "Notifications" ? (
        <NotificationsSettings />
      ) : activeTab === "Featured Items" ? (
        <FeaturedItemsSettings />
      ) : (
        <EarningsSettings />
      )}
    </div>
  );
}

export default SettingsPage;
