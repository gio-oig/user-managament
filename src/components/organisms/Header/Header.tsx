import { Box, HStack, Text } from "@chakra-ui/react";

import { HeaderContainer } from "src/components/atoms/headerContainer/HeaderContainer";
import { RiSettings4Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import HeaderIconButton from "src/components/atoms/headerIconButton/HeaderIconButton";
import { useLocation } from "react-router-dom";
import { HeaderSearch } from "src/components/molecules/headerSearch/HeaderSearch";

import * as routes from "src/utils/routePaths";
import { useAppContext } from "src/components/context/appContext";

const settingsIconStyles = { color: "#fff", width: "46px", height: "46px" };
const plusIconStyles = { color: "#fff", width: "31px", height: "31px" };

const Header = () => {
  const { openAddUserModal } = useAppContext();
  let { pathname } = useLocation();
  const isHome = pathname === routes.HOME_PATH;

  return (
    <Box bg="#fff" boxShadow="0px 3px 6px #00000029;" zIndex={50}>
      <HeaderContainer pos="relative" pt={24} pb={16}>
        <HStack justifyContent="space-between">
          <Text fontSize="4xl" fontWeight="semibold" lineHeight="48px">
            {isHome ? "Project Access" : "User Setup"}
          </Text>
          {isHome && <HeaderSearch />}
        </HStack>
        <HeaderIconButton
          bgColor={isHome ? "#305ECA" : "#C6C6C6"}
          icon={
            isHome ? (
              <AiOutlinePlus
                onClick={openAddUserModal}
                style={plusIconStyles}
              />
            ) : (
              <RiSettings4Fill style={settingsIconStyles} />
            )
          }
        />
      </HeaderContainer>
    </Box>
  );
};

export default Header;
