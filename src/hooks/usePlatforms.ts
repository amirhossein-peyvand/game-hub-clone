import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });

export default usePlatforms;
