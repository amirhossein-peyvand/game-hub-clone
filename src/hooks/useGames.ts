import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          ordering: gameQuery.sortOrder,
          genres: gameQuery.genreId,
          search: gameQuery.searchText,
          parent_platform: gameQuery.platformId,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
