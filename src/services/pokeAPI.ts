import axios from 'axios';

export const baseURL = 'https://pokeapi.co/api/v2/';

export default axios.create({
  baseURL,
});
