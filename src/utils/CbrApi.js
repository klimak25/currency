export const BASE_URL =
  "https://www.cbr-xml-daily.ru/daily_json.js";

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const getCurrency = () => {
  return fetch(`${BASE_URL}`)
  .then(checkResponse);
};