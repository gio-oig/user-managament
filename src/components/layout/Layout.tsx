import { Box } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Header from "src/components/organisms/Header/Header";

const Layout = () => {
  return (
    <Box bgColor="#F3F3F3" minH="100vh">
      <Header />

      <Box pt={16} pb={4}>
        <Box maxW="1340px" m="auto">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
