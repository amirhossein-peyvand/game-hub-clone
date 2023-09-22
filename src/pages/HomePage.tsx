import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: `210px 1fr`,
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding={3}>
            <GameHeading />
            <Flex columnGap={3} marginY={5}>
              <PlatformSelector />
              <SortSelector />
            </Flex>
            <GameGrid />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
