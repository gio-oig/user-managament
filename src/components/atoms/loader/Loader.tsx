import { Center, Spinner } from "@chakra-ui/react";
import { FC } from "react";

type LoaderProsp = {
  message: String;
};

const Loader: FC<LoaderProsp> = ({ message }) => {
  return (
    <Center>
      <Spinner color="red.500" />
      {message}
    </Center>
  );
};

export default Loader;
