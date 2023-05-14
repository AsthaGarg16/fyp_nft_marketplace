import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import DetailCard from "./DetailCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CollectionTab(props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
  ];
  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "New Arrivals", checked: false },
        { value: "sale", label: "Sale", checked: false },
        { value: "travel", label: "Travel", checked: true },
        { value: "organization", label: "Organization", checked: false },
        { value: "accessories", label: "Accessories", checked: false },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "2l", label: "2L", checked: false },
        { value: "6l", label: "6L", checked: false },
        { value: "12l", label: "12L", checked: false },
        { value: "18l", label: "18L", checked: false },
        { value: "20l", label: "20L", checked: false },
        { value: "40l", label: "40L", checked: true },
      ],
    },
  ];
  var items = [
    {
      source: "https://picsum.photos/id/15/700/900",
      name: "Fire",
      price: "0.12 ETH",
    },
    {
      source: "https://picsum.photos/id/25/700/900",
      name: "Ice",
      price: "0.1 ETH",
    },
    {
      source: "https://picsum.photos/id/55/700/900",
      name: "Water",
      price: "0.09 ETH",
    },
    {
      source: "https://picsum.photos/id/52/700/900",
      name: "Color",
      price: "0.1 ETH",
    },
    {
      source: "https://picsum.photos/id/23/700/900",
      name: "Dread",
      price: "0.34 ETH",
    },
    {
      source: "https://picsum.photos/id/10/700/900",
      name: "heart",
      price: "0.03 ETH",
    },
  ];
  // for (var i = 0; i < 15; i++) {
  //   items.push(i);
  // }
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

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Filters */}
        <form className="hidden lg:block">
          <h3 className="sr-only">Categories</h3>

          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-b border-gray-200 py-6 dark:bg-gray-800 dark:text-gray-200"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-xl text-gray-400 hover:text-gray-500 dark:bg-gray-800">
                      <span className="font-medium text-gray-900 dark:text-gray-200">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-lg text-gray-600 dark:text-gray-400"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>

        {/* Product grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-4 lg:grid-cols-3">
            {items.map((item) => (
              <DetailCard
                source={item.source}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-1/4"></div> */}
    </div>
  );
}

export default CollectionTab;
