import axios from "axios";

const apiTypicode = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export { apiTypicode };
