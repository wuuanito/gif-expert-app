
export const getGifs = async (category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=GJI2ipvw8BTSuz8Or8Fkev9vURC6Pksk&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map((datos)=>({
        id : datos.id,
        title : datos.title,
        url: datos.images.downsized_medium.url
    }))
    
    return gifs;
}