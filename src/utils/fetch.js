export const fetchApi = async (endpoint) => {
  return await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
