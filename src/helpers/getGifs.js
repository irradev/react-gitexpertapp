export const getGifs = async( category ) => {
    const apiKey = 'SL4BS0LSOYDy5mmzH9xsjHJd9Mp6AR14';
    const q = encodeURI(category);
    const limit = '10';
    const urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}`;

    const resp = await fetch(urlSearch);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifs;
}