// export const BASE_URL =
//   "https://www.cbr-xml-daily.ru/daily_json.js";

  export const BASE_URL =
"http://api.currencylayer.com/live?access_key=d86ebb731c563e410ad66a28faad09a2&format=1";

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const getCurrency = () => {
  return fetch(`${BASE_URL}`)
  .then(checkResponse);
};





