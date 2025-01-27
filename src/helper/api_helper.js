import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const GET_ALL_RECIPES = async () => {
  return await axios.get(`${BASE_URL}/recipes`);
};
