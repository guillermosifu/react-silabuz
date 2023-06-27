import React from "react";

export const GetApi = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=fDRSrQobpCaXcJXfCyWlL5Gi061Rrz5b&q=${category}&limit=20`;
  const response = await fetch(url);
  const {data} = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);

  return gifs;
};
