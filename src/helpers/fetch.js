import { history } from "../routes";

export const fetchHelper = ({ endpoints, method = 'GET', payload = null }) => {
  const params = `?${endpoints.split('?')[1]}`

  if (params && params !== '?undefined') {
    history.replace({
      search: params
    })
  }

  return fetch(`${process.env.REACT_APP_API_URL}${endpoints}`, {
    method,
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
    },
    ...(payload ? { body: JSON.stringify(payload) } : {}),
  }).then(res => res.json());
};
