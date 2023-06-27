import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpressApp = () => {
  const [categories, setCategories] = useState();
  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  

  return (
    <div>
      <h1>Busca Tu Gif</h1>
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
