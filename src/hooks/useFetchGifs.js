import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
 export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  comst [isLoading,setIsloading] = useState(true)
  const getGifImages = async ()=>{
      const newImages = await getGifs(category)
      setImages(newImages)
    setIsloading(false)
  }
  
  useEffect( ()=>{
      getGifImages()
  
  },[])

    return{
        images : images,
        isLoading: isLoading
    }

 }
 