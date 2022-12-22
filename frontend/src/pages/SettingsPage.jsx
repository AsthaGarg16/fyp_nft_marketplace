import React from "react";

function ProfileSettings() {
  return (
    <div className="text-left">
      <form className="mt-6">
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-white">Username</span>
            <input
              type="text"
              name="name"
              className="

            w-full
            block px-4 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Enter username"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-white">Email address</span>
            <input
              name="email"
              type="email"
              className="
            block
            w-full
            mt-2 px-4 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Enter email"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-xl">
            <span className="text-gray-700 dark:text-white">Bio</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="5"
            ></textarea>
          </label>
        </div>

        <div className="mb-8">
          <button
            type="submit"
            className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="m-10">
      <ul className="flex flex-wrap text-2xl font-medium text-center text-gray-500 border-b-2 border-gray-200 dark:border-gray-600 dark:text-gray-400">
        <div className="flex justify-items-start">
          <li className="mr-2">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-4 text-indigo-500 bg-gray-100 rounded-t-lg active border-b-4 dark:bg-gray-700 dark:text-white dark:border-indigo-500"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Notifications
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Earnings
            </a>
          </li>
        </div>
      </ul>
      <ProfileSettings />
    </div>
  );
}

export default SettingsPage;
