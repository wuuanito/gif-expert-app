import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {


const [categories, setcategories] = useState(['One Punch','Dragon Ball'])

const onAddCategory = (value) => {
    if(categories.includes(value))return

    setcategories([...categories,value])
}


console.log(categories);

  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory onNewCategory = {(value) => onAddCategory(value)}/>
        <ol>
            {categories.map( (category) =>{
                return <li key ={category}>{category}</li>
            })}
        </ol>
    </>
  )
}
