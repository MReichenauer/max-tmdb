import axios from "axios";
import { ApiListOfMovies } from "../types/apiTypes";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const get = async <T>(endpoint: string) => {
  try {
    const res = await instance.get<T>(endpoint);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const getCinemaMovies = async () => {
  const res = await get<ApiListOfMovies>(
    "/movie/now_playing?include_adult=false&page=1&region=SE"
  );
  return res.results;
};

export const getTrendingMovies = async () => {
  const res = await get<ApiListOfMovies>(
    "/movie/popular?include_adult=false&page=1&region=SE"
  );
  return res.results;
};
