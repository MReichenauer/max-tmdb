import { useQuery } from "@tanstack/react-query";
import { ListOfMovies } from "../types/clientTypes";
import { getTrendingMovies } from "../services/apiCommunication";

export const useTrendingMovies = () => {
  return useQuery<ListOfMovies[]>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    gcTime: 24 * 60 * 60 * 1000, // 24hr
    staleTime: 12 * 60 * 60 * 1000, // 12hr
  });
};

export default useTrendingMovies;
