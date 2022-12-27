import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CollectionTab(props) {
  return (
    <div>
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
      <div className="flex m-2 ">
        <input
          type="text"
          className="w-[44rem] px-8 py-2 mx-5 bg-white border rounded-xl focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring text-base dark:bg-gray-700"
          placeholder="Search..."
        />
        {/* <select className="bg-white rounded-xl border-2 dark:border-2 dark:bg-gray-700 dark:border-gray-500 text-lg dark:text-gray-100">
          <option value="fruit" className="dark:hover-gray-600">
            Fruit
          </option>

          <option value="vegetable">Vegetable</option>

          <option value="meat" className="rounded-b-lg">
            Meat
          </option>
        </select> */}
        <Menu as="div" className="relative inline-block text-left mx-5">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-xl border border-2 border-gray-400 bg-white px-4 py-2 text-2xl font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              24h
              <ChevronDownIcon
                className="-mr-2 ml-5 h-8 w-8"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg"
                      )}
                    >
                      24h
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg"
                      )}
                    >
                      7d
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg"
                      )}
                    >
                      30d
                    </p>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-lg"
                        )}
                      >
                        All
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <button className="dark:text-gray-100 dark:bg-gray-700 rounded-xl font-semibold text-xl px-5 dark:hover:bg-gray-600">
          Make Collection Offer
        </button>
      </div>

      <div className="w-1/4"></div>
    </div>
  );
}

export default CollectionTab;
