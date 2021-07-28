const getAvatar = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  return await response.json();
};

export { getAvatar };
