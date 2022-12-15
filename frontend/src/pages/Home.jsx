import React from "react";
import Card from "../components/Card";
import CollectionCard from "../components/CollectionCard";
import DetailCard from "../components/DetailCard";
// import nft from "../assets/nft.png";

function Home() {
  return (
    // <div class="flex items-center min-h-screen">
    <div class="flex flex-wrap justify-center">
      <Card />
      <DetailCard />
      <CollectionCard />
    </div>
    // </div>
  );
}

export default Home;
