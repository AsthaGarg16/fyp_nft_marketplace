import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import Table from "./Table";

// function ListItem(props) {
//   console.log("in listitem");
//   return (
//     <div className="flex items-center space-x-6">
//       <div className="flex-shrink-0">
//         <img
//           className="w-14 h-14 rounded-full"
//           src={props.img_src}
//           alt="Neil"
//         />
//       </div>
//       <div className="flex-1 min-w-0 text-left">
//         <p className="text-xl font-lg text-gray-900 truncate dark:text-white">
//           {props.name}
//         </p>
//       </div>
//       <div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
//         {props.price}
//       </div>
//       <div className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
//         {props.volume}
//       </div>
//     </div>
//   );
// }

function TabList(props) {
  const table = [
    {
      CollectionImage: "https://picsum.photos/100/200",
      CollectionName: "Title",
      FloorPrice: "2ETH",
      Volume: "16",
    },
    {
      CollectionImage: "https://picsum.photos/100/200",
      CollectionName: "This fire",
      FloorPrice: "$299",
      Volume: "2000",
    },
    {
      CollectionImage: "https://picsum.photos/100/200",
      CollectionName: "Name of collection",
      FloorPrice: "$299",
      Volume: "2000",
    },
    {
      CollectionImage: "https://picsum.photos/100/200",
      CollectionName: "Name of collection",
      FloorPrice: "$299",
      Volume: "2000",
    },
    {
      CollectionImage: "https://picsum.photos/100/200",
      CollectionName: "Name of collection",
      FloorPrice: "$299",
      Volume: "2000",
    },
  ];
  useEffect(() => {}, [props.table]);

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
      <div className="inline-flex">
        <Table tableContent={table} />
        <Table tableContent={table} />
      </div>
    </div>
  );
}

export default TabList;
