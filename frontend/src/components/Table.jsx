import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Table(props) {
  const navigate = useNavigate();
  const [items, setItems] = useState(props.tableContent);
  function GoToCollection(collectionName) {
    //go to collection
    navigate("/collection");
  }
  return (
    <div className="overflow-x-auto w-6/12 m-2 relative shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center pb-4"></div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
          <tr>
            <th scope="col" className="py-3 px-6">
              Collection
            </th>
            <th scope="col" className="py-3 px-6 text-right">
              Floor Price
            </th>
            <th scope="col" className="py-3 px-6 text-right">
              Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-700"
              onClick={() => GoToCollection()}
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="w-16 h-16 object-cover rounded-lg shadow-lg "
                    src={item.CollectionImage}
                    alt="Profile"
                  />
                  <span className="text-xl">{item.CollectionName}</span>
                </div>
              </th>
              <td className="py-4 px-6 text-xl text-gray-800 text-right dark:text-gray-300">
                {item.FloorPrice}
              </td>
              <td className="py-4 px-6 text-xl text-gray-800 text-right dark:text-gray-300">
                {item.Volume}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
