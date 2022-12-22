import React from "react";

function Table() {
  return (
    <div class="overflow-x-auto w-6/12 relative shadow-md sm:rounded-lg">
      <div class="flex justify-between items-center pb-4"></div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Product name
            </th>
            <th scope="col" class="py-3 px-6">
              Color
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  class="w-16 h-16 object-cover rounded-full shadow-lg "
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Bonnie image"
                />
                <span className="text-xl">Apple MacBook Pro 17"</span>
              </div>
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">Laptop</td>
            <td class="py-4 px-6">$2999</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="py-4 px-6">White</td>
            <td class="py-4 px-6">Laptop PC</td>
            <td class="py-4 px-6">$1999</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="py-4 px-6">Black</td>
            <td class="py-4 px-6">Accessories</td>
            <td class="py-4 px-6">$99</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple Watch
            </th>
            <td class="py-4 px-6">Silver</td>
            <td class="py-4 px-6">Accessories</td>
            <td class="py-4 px-6">$179</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              iPad
            </th>
            <td class="py-4 px-6">Gold</td>
            <td class="py-4 px-6">Tablet</td>
            <td class="py-4 px-6">$699</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple iMac 27"
            </th>
            <td class="py-4 px-6">Silver</td>
            <td class="py-4 px-6">PC Desktop</td>
            <td class="py-4 px-6">$3999</td>
            <td class="py-4 px-6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;