export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3duWb7OetjkmS07AWCb4ETmHbZr4D6Xi&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json(); // data es un arreglo que viene en el response

    const gifs = data.map( img => ({
        id : img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;
}