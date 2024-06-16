import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services/apiCommunication";
import { SingleMovieById } from "../types/clientTypes";

const useMovieById = (id: number) => {
  return useQuery<SingleMovieById>({
    queryKey: ["movieById", id],
    queryFn: () => getMovieById(id),
    gcTime: 48 * 60 * 60 * 1000, // 48hr
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });
};

export default useMovieById;
