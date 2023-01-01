import { EyeIcon, HeartIcon } from "@heroicons/react/20/solid";

function ItemPage() {
  return (
    <div className="flex">
      <div className="w-1/2 m-5">
        <div className="h-[56rem] m-5">
          <img
            src={require("../assets/nft.jpg")}
            alt="nft"
            className="object-contain rounded-xl"
          />
        </div>
      </div>
      <div className="text-left w-1/2 m-5">
        <p>Collection Name</p>
        <p>item Name</p>
        <p>owned by</p>
        <div className="flex w-full mr-5">
          <EyeIcon className="h-5 w-5" />
          <p>23 views</p>
          <HeartIcon className="h-5 w-5" />
          <p>7 favourties</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ItemPage;
