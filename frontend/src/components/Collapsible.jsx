import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Collapsible = ({ header, content }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="my-5 border-2 dark:border-gray-600 border-gray-400 rounded-lg py-5 dark:bg-gray-700/50">
      <div className="flex items-center px-3">
        {header}
        <button
          onClick={toggle}
          type="button"
          className="text-gray-300 hover:bg-gray-300 justify-self-end rounded-lg text-md text-center inline-flex items-center dark:hover:bg-gray-600"
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
          <div className="mt-5">
            <h4>toggle</h4>
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
