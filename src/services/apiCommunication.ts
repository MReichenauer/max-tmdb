import axios from "axios";
import { ApiListOfGenres, ApiListOfMovies } from "../types/apiTypes";
import { SingleMovieById, SinglePersonById } from "../types/clientTypes";

const API_TOKEN: string = import.meta.env.VITE_API_TOKEN;

const BASE_URL: string = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const get = async <T>(endpoint: string) => {
  const res = await instance.get<T>(endpoint);
  return res.data;
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

export const getTopRatedMovies = async () => {
  const res = await get<ApiListOfMovies>(
    "/movie/top_rated?include_adult=false&page=1&region=SE"
  );
  return res.results;
};

export const getAllGenres = async () => {
  const res = await get<ApiListOfGenres>("/genre/movie/list?language=sv-SV");
  return res.genres;
};

export const getMoviesByGenre = async (id: number, page: number) => {
  const res = await get<ApiListOfMovies>(
    `/discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc&with_genres=${id}`
  );
  return res;
};

export const getMovieById = async (id: number) => {
  const res = await get<SingleMovieById>(
    `/movie/${id}?append_to_response=credits&language=sv-SV`
  );
  return res;
};

export const getPersonById = async (id: number) => {
  const res = await get<SinglePersonById>(
    `/person/${id}?append_to_response=credits&language=sv-SV`
  );
  return res;
};
