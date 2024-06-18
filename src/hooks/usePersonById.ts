import { useQuery } from "@tanstack/react-query";
import { getPersonById } from "../services/apiCommunication";
import { SinglePersonById } from "../types/clientTypes";

const usePersonById = (id: number) => {
  return useQuery<SinglePersonById>({
    queryKey: ["personById", id],
    queryFn: () => getPersonById(id),
    gcTime: 48 * 60 * 60 * 1000, // 48hr
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });
};

export default usePersonById;
