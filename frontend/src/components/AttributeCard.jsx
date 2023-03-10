import React from "react";

function AttributeCard(props) {
  return (
    <div className="m-2 border dark:border-indigo-500 border-indigo-600 w-48 rounded-lg py-2 dark:bg-indigo-700/25 bg-indigo-300/25">
      <p className="dark:text-indigo-400 text-indigo-600 text-md font-medium">
        {props.category}
      </p>
      <p className="dark:text-gray-200 text-gray-800 text-lg font-light">
        {props.value}
      </p>
    </div>
  );
}

export default AttributeCard;
