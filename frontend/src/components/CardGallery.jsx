import React from "react";
import Carousel from "react-grid-carousel";
import Card from "./Card";

function CardGallery() {
  const itemList = [
    {
      source: require("../assets/nft.jpg"),
      collectionName: "Nature Lover",
      price: 0.13,
    },
    {
      source: "https://picsum.photos/id/15/700/900",
      collectionName: "The Scene",
      price: 0.112,
    },
    {
      source: "https://picsum.photos/id/20/700/900",
      collectionName: "CyberPunk",
      price: 0.163,
    },
    {
      source: "https://picsum.photos/id/25/700/900",
      collectionName: "Loaded",
      price: 0.23,
    },
    {
      source: "https://picsum.photos/id/30/700/900",
      collectionName: "This is it",
      price: 0.9,
    },
  ];
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      {itemList.map((item) => (
        <Carousel.Item>
          <Card
            source={item.source}
            collectionName={item.collectionName}
            price={item.price}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardGallery;
