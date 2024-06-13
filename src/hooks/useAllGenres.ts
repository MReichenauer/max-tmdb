import { useQuery } from "@tanstack/react-query";
import { getAllGenres } from "../services/apiCommunication";
import { ListOfGenres } from "../types/clientTypes";

const useAllGenres = () => {
  return useQuery<ListOfGenres[]>({
    queryKey: ["genresList"],
    queryFn: getAllGenres,
    gcTime: 24 * 60 * 60 * 1000, // 24hr
    staleTime: 12 * 60 * 60 * 1000, // 12hr
  });
};

export default useAllGenres;
