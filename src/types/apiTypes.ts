import { ListOfGenres, ListOfMovies } from "./clientTypes";

export type ApiListOfMovies = {
  page: number;
  total_pages: number;
  total_results: number;
  results: ListOfMovies[];
};

export type ApiListOfGenres = {
  genres: ListOfGenres[];
};
