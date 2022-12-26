import React from "react";
import Card from "../components/Card";
import CardGallery from "../components/CardGallery";
import CategoryCard from "../components/CategoryCard";
import CollectionCard from "../components/CollectionCard";
import DetailCard from "../components/DetailCard";
import Gallery from "../components/Gallery";
import TabList from "../components/TabList";
// import nft from "../assets/nft.png";

function Home() {
  const table = [
    {
      CollectionImage: "",
      CollectionName: "Name of collection",
      FloorPrice: "$299",
      Volume: "2000",
    },
  ];

  const categories = [
    "Art",
    "Collectibles",
    "Domain Names",
    "Music",
    "Photography",
    "Sports",
    "Virtual Worlds",
    "Trading Cards",
    "Fractional NFT",
  ];
  return (
    // <div className="flex items-center min-h-screen">
    <div className="mb-10">
      <div className="m-5">
        <p className="mb-10 mx-5 text-black text-5xl font-bold dark:text-white text-left">
          Hot
        </p>
        <CardGallery />
      </div>
      <div className="m-5 mb-10">
        <TabList table={table} />
      </div>
      <div className="m-5 mb-10">
        <p className="mb-10 mx-5 text-black text-5xl font-bold dark:text-white text-left">
          Notable Collections
        </p>
        <Gallery />
      </div>
      <div className="m-5 mb-10">
        <p className="mb-10 mx-5 text-black text-5xl font-bold dark:text-white text-left">
          Explore collections by category
        </p>
        <div className="grid grid-cols-3 m-10 gap-10">
          {categories.map((category) => (
            <CategoryCard name={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
