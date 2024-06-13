import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../services/apiCommunication";
import { ApiListOfMovies } from "../types/apiTypes";

const useMoviesByGenre = (id: number) => {
  return useQuery<ApiListOfMovies>({
    queryKey: ["moviesByGenre", id],
    queryFn: () => getMoviesByGenre(id),
    gcTime: 24 * 60 * 60 * 1000, // 24hr
    staleTime: 12 * 60 * 60 * 1000, // 12hr
  });
};

export default useMoviesByGenre;
