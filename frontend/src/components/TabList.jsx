import React from "react";
import Dropdown from "./Dropdown";

function ListItem(props) {
  console.log("in listitem");
  return (
    <div className="flex items-center space-x-6">
      <div className="flex-shrink-0">
        <img
          className="w-14 h-14 rounded-full"
          src={props.img_src}
          alt="Neil"
        />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-xl font-lg text-gray-900 truncate dark:text-white">
          {props.name}
        </p>
      </div>
      <div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
        {props.price}
      </div>
      <div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
        {props.volume}
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="grid flex">
      <ul className="flex flex-wrap text-2xl font-medium text-center text-gray-500 border-b-2 border-gray-200 dark:border-gray-600 dark:text-gray-400">
        <div className="flex justify-items-start">
          <li className="mr-2">
            <p className="inline-block p-4 text-indigo-500 bg-gray-100 rounded-t-lg active border-b-4 dark:bg-gray-700 dark:text-white dark:border-indigo-500">
              Trending
            </p>
          </li>
          <li className="mr-2">
            <p className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Top
            </p>
          </li>
        </div>

        <div className="flex place-items-end">
          <Dropdown />
        </div>
      </ul>
      <div>
        <ul className="w-6/12 divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <ListItem
              img_src={
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              name={"Collection"}
              price={"$300"}
              volume={"1000"}
            />
          </li>
          <li className="py-3 sm:py-4">
            <ListItem
              img_src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              name="Collection"
              price="$3000"
              volume="100"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabList;
