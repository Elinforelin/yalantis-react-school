export const fetchApi = async (endpoint) => {
  return await fetch(
    `https://yalantis-react-school-api.yalantis.com/api/v1/${endpoint}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};