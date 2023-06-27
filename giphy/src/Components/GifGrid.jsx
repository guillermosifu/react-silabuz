import { useState, useEffect } from "react";
import {GetApi} from "../Helpers/GetApi"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    GetApi(category).then((newImages) => setImages(newImages));
    setIsLoding(false)
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoding && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id}
                  {...image}
          />
        ))}
      </div>
    </>
  );
};
