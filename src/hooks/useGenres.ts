import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genres from "../data/genres";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genres,
  });

export default useGenres;
