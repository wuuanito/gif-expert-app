import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Valorant']);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    setcategories([ value,...categories]);
  };


  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
