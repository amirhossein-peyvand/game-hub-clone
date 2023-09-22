import {
  HStack,
  Heading,
  List,
  ListItem,
  Spinner,
  Image,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageCropper from "../services/imageCropper";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5} marginTop={2} paddingLeft={4}>
        Genres
      </Heading>
      <List paddingLeft={4}>
        {genres.results.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize={10}
                src={imageCropper(genre.image_background)}
                borderRadius={8}
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
