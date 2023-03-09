import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Collapsible = ({ header, content, initialOpen }) => {
  const [open, setOpen] = useState(initialOpen);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
      <div className="grid grid-cols-12 px-3">
        <div className="col-span-11">{header}</div>

        <button
          onClick={toggle}
          type="button"
          className="text-gray-300 hover:bg-gray-300 rounded-lg text-md dark:hover:bg-gray-600 items-center justify-self-center"
        >
          {open ? (
            <ChevronUpIcon className="h-8 w-8" />
          ) : (
            <ChevronDownIcon className="h-8 w-8" />
          )}
        </button>
      </div>

      {open && (
        <div>
          <hr className="h-0.5 mt-3 bg-gray-600 border-0 dark:bg-gray-600"></hr>
          <div className="mt-3">
            {/* <h4>toggle</h4> */}
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
