import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} padding={2}>
      <Box>
        <Heading>{game.name}</Heading>
        <Text marginY={7}>
          <ExpandableText>{game.description_raw}</ExpandableText>
        </Text>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
