import React from "react";
import Card from "../components/Card";
import CardGallery from "../components/CardGallery";
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
  return (
    // <div className="flex items-center min-h-screen">
    <div>
      <div className="m-5">
        <p className="mb-10 mx-5 text-black text-5xl font-bold dark:text-white text-left">
          Hot
        </p>
        <CardGallery />
      </div>
      <div className="m-5">
        <TabList table={table} />
      </div>
      <div className="m-5">
        <p className="mb-10 mx-5 text-black text-5xl font-bold dark:text-white text-left">
          Notable Collections
        </p>
        <Gallery />
      </div>

      <div className="flex flex-wrap justify-center">
        <Card />
        <DetailCard />
      </div>
      <CollectionCard />
    </div>
  );
}

export default Home;
