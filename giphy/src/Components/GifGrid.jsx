import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { GetApi } from "../Helpers/GetApi";

import React from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetApi(category).then((newImages) => setImages(newImages));
    setIsLoading(false);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div>
        {images.map((image) => (
          <GifItem Key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
