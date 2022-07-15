import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Center>
      <h2>Error 404, Page not found</h2>
      <p>
        <Link to="/">Go to the home page.</Link>
      </p>
    </Center>
  );
};

export default NoMatch;
