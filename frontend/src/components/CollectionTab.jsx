import React from "react";

function CollectionTab(props) {
  return (
    <div className="grid flex">
      <ul className="flex flex-wrap text-2xl font-medium text-center text-gray-500 border-b-2 border-gray-200 dark:border-gray-600 dark:text-gray-400">
        <div className="flex justify-items-start">
          <li className="mr-2">
            <p className="inline-block p-4 text-indigo-500 bg-gray-100 rounded-t-lg active border-b-4 dark:bg-gray-700 dark:text-white dark:border-indigo-500">
              Items
            </p>
          </li>
          <li className="mr-2">
            <p className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              Analytics
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default CollectionTab;
