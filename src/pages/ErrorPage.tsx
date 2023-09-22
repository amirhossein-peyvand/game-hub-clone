import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={4}>
        <Heading as="h1">Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Sorry, an unexpected error occurred!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
