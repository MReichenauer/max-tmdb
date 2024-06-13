import { useQuery } from "@tanstack/react-query";
import { ListOfMovies } from "../types/clientTypes";
import { getCinemaMovies } from "../services/apiCommunication";

const useCinemaMovies = () => {
  return useQuery<ListOfMovies[]>({
    queryKey: ["cinemaMovies"],
    queryFn: getCinemaMovies,
    gcTime: 24 * 60 * 60 * 1000, // 24hr
    staleTime: 12 * 60 * 60 * 1000, // 12hr
  });
};

export default useCinemaMovies;
