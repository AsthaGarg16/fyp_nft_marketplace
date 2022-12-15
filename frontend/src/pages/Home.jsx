import React from "react";
import Card from "../components/Card";
import DetailCard from "../components/DetailCard";
// import nft from "../assets/nft.png";

function Home() {
  return (
    // <div class="flex items-center min-h-screen">
    <div class="flex flex-wrap justify-center">
      <Card />
      <div class="card-zoom">
        <div class="card-zoom-image">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">FIAT</h1>
      </div>
      <div class="card-zoom">
        <div class="card-zoom-image ">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">VAN</h1>
      </div>
      <div class="card-zoom">
        <div class="card-zoom-image">
          <img src={require("../assets/nft.jpg")} alt="nft" />
        </div>
        <h1 class="card-zoom-text">MINI</h1>
      </div>
      <DetailCard />
    </div>
    // </div>
  );
}

export default Home;
