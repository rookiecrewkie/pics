const getPhotos = async term => {
  return (await fetch(
    `https://api.unsplash.com/search/photos?client_id=${
      process.env.REACT_APP_UNSPLASH_API_KEY
    }&query=${term}`,
    { method: "get" }
  )).json();
};

export default { getPhotos };
