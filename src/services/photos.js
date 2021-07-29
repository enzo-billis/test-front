const getAvatar = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  return await response.json();
};

const getPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
};

export { getAvatar, getPhotos };
