import { EyeIcon, HeartIcon } from "@heroicons/react/20/solid";
import { useScrollTo } from "../components/Scroll";
function ItemPage() {
  useScrollTo(0, 0);
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 m-5">
          <div className="h-[56rem]">
            <img
              src={require("../assets/nft.jpg")}
              alt="nft"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
        <div className="text-left w-1/2 m-5">
          <p className="dark:text-indigo-400 text-indigo-700 text-2xl mb-5 mt-5 font-semibold">
            Collection Name
          </p>
          <p className="dark:text-white text-black font-bold text-4xl tracking-wide mb-1">
            Item Name
          </p>
          <p className="dark:text-gray-300 text-gray-700 text-xl mb-5">
            owned by
          </p>
          <div className="flex w-full mr-5 items-center">
            <EyeIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mr-3" />
            <p className="text-gray-800 dark:text-gray-200">23 views</p>
            <HeartIcon className="h-6 w-6 dark:fill-gray-200 fill-gray-800 mx-3" />
            <p className="text-gray-800 dark:text-gray-200">7 favourties</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
