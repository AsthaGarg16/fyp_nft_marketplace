import React from "react";
import Card from "../components/Card";
import CollectionCard from "../components/CollectionCard";
import DetailCard from "../components/DetailCard";
import TabList from "../components/TabList";
// import nft from "../assets/nft.png";

function Home() {
  return (
    // <div class="flex items-center min-h-screen">
    <div>
      <div className="flex flex-wrap justify-center">
        <Card />
        <DetailCard />
      </div>
      <CollectionCard />
      <div className="m-5">
        <TabList />
      </div>
    </div>
  );
}

export default Home;
