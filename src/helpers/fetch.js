export const fetchHelper = ({ endpoints, method = 'GET', payload = null }) => {
  return fetch(`${process.env.REACT_APP_API_URL}${endpoints}`, {
    method,
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
    },
    ...(payload ? { body: JSON.stringify(payload) } : {}),
  });
};
