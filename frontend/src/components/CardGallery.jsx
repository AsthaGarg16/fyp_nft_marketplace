import React from "react";
import Carousel from "react-grid-carousel";
import Card from "./Card";

function CardGallery() {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
    </Carousel>
  );
}

export default CardGallery;
