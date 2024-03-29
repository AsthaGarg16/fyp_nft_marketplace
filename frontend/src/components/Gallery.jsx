import React from "react";
import Carousel from "react-grid-carousel";
import CollectionCard from "./CollectionCard";

function Gallery() {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      <Carousel.Item>
        <CollectionCard />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  );
}

export default Gallery;
