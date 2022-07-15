import { Box, Container, HStack, IconButton, Text } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Header from "src/components/organisms/Header/Header";

const Layout = () => {
  return (
    <Box>
      <Header />

      <Box bgColor="#F3F3F3" minHeight="50vh">
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
