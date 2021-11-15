
export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=fU74YvePxjm0mhor0c4SELoOtawZ92Nw`;
  const answer = await fetch(url);
  const { data } = await answer.json();
  const extractGif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  }
  )
  return extractGif
}