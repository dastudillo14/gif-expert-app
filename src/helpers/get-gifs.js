/**
 * Función para consultar gifs
 * @param {*} category 
 * @returns 
 */
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Axd34ywr7fycNQi8PmvrHvoquEZx6g0p&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((d) => ({
        id: d.id,
        title: d.title,
        url: d.images.downsized_medium.url
    }));
    
    return gifs;
}