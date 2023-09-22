import { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize="lg" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
