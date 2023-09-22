import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);

  if (error || isLoading) return null;
  console.log(data?.results);

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={1}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
