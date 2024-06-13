import { useQuery } from "@tanstack/react-query";
import { ListOfMovies } from "../types/clientTypes";
import { getTopRatedMovies } from "../services/apiCommunication";

const useTopRatedMovies = () => {
  return useQuery<ListOfMovies[]>({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
    gcTime: 24 * 60 * 60 * 1000, // 24hr
    staleTime: 12 * 60 * 60 * 1000, // 12hr
  });
};

export default useTopRatedMovies;
