import React from "react";

function OfferTable(props) {
  //   const [items, setItems] = useState(tableContent);
  //   function GoToCollection(collectionName) {
  //     //go to collection
  //     navigate("/collection");
  //   }
  return (
    <div className="overflow-x-auto m-2 relative shadow-md sm:rounded-lg overflow-y-auto h-96">
      <div className="flex justify-between items-center pb-4"></div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
          <tr>
            <th scope="col" className="py-3 px-6 ">
              Price
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              Floor Difference
            </th>
            <th scope="col" className="py-3 px-6 text-left">
              From
            </th>
          </tr>
        </thead>
        <tbody>
          {props.tableContent.map((item) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-200"
              >
                <span className="text-lg">{item.Price}</span>
              </th>
              <td className="py-4 px-6 text-lg text-gray-800 text-right dark:text-gray-300 text-left">
                {item.FloorDifference}
              </td>
              <td className="py-4 px-6 text-lg text-gray-800 text-right dark:text-gray-300 text-left">
                {item.From}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OfferTable;
