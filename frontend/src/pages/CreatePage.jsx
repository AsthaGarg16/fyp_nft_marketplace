import {
  ChartBarIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
function CreatePage() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <h1 className="mb-10 mx-5 mt-5 text-black text-5xl font-bold dark:text-white text-left">
        Create New Item
      </h1>
      <form>
        <div className="m-10 flex justify-between">
          <div className="overflow-x-auto w-6/12 m-5 relative text-left">
            <div>
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-500"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                External Link
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                We will include a link to this URL on this item's detail page,
                so that users can click to learn more about it. You are welcome
                to link to your own webpage with more details.
              </p>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Description
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                The description will be included on the item's detail page
                underneath its image. Markdown syntax is supported.
              </p>
              <div className="flex flex-col items-start">
                <textarea
                  type="text"
                  name="name"
                  rows="5"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-6/12 m-5 relative text-left">
            <div>
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Image, Video, Audio, or 3D Model
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </p>
              <div className="flex flex-col items-center mt-5">
                <div class="flex items-center justify-center w-1/2 h-44">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 mt-5">
                      <CloudArrowUpIcon
                        className="h-12 w-12 stroke-2 fill-gray-500"
                        aria-hidden="true"
                      />
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Collection
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                This is the collection where your item will appear.
              </p>
              <div className="flex flex-col items-start">
                <select
                  id="countries"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="name"
                className="text-2xl font-medium text-gray-700 undefined dark:text-gray-200"
              >
                Supply
              </label>
              <p className="text-md text-gray-800 dark:text-gray-400">
                The number of items that can be minted. No gas cost to you!
              </p>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="w-full pb-2 pl-3 pt-2 mt-2 mr-2 text-lg border-gray-300 border-4 dark:border-4 rounded-lg shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border dark:border-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 justify-between">
          <h1 className="mx-5 mt-5 text-black text-3xl font-semibold text-gray-900 dark:text-gray-100 text-left">
            Other details
          </h1>
          <div className="flex justify-between">
            <div className="overflow-x-auto w-6/12 m-5 relative text-left">
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <ListBulletIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Properties
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Textual traits that show up as rectangles
                  </p>
                </div>
                <button className="dark:bg-gray-600 rounded-lg p-3 dark:hover:bg-gray-500">
                  <PlusIcon className="h-8 w-8 stroke-2 dark:fill-gray-200" />
                </button>
              </div>
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <ChartBarIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Levels
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Numerical traits that show as a progress bar
                  </p>
                </div>
                <button className="dark:bg-gray-600 rounded-lg p-3 dark:hover:bg-gray-500">
                  <PlusIcon className="h-8 w-8 stroke-2 dark:fill-gray-200" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-6/12 m-5 relative text-left">
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <LockClosedIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Unlockable Content
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Include content that can only be revealed by the owner of
                    the item.
                  </p>
                </div>
                <switch
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
                  className={`${enabled ? "bg-indigo-600" : "bg-gray-500"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </switch>
              </div>
              <div className="my-5 flex items-center justify-between rounded-lg p-4 border border-2 border-gray-300 dark:border-gray-600">
                <ExclamationTriangleIcon className="h-8 w-8 stroke-2 fill-gray-600 self-start flex-none m-1 dark:fill-gray-400" />
                <div className="mx-4 flex-auto">
                  <h1 className="text-black text-2xl font-medium text-gray-700 dark:text-gray-200 text-left">
                    Explicit & Sensitive Content
                  </h1>
                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Set this item as explicit and sensitive content
                  </p>
                </div>
                <switch
                  checked="true"
                  onChange={() => setEnabled(!enabled)}
                  className={`${true ? "bg-indigo-600" : "bg-gray-500"}
          relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${true ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </switch>
              </div>
            </div>
          </div>
        </div>
        <button className="p-5 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 text-white">
          Create
        </button>
      </form>
    </div>
  );
}
export default CreatePage;
