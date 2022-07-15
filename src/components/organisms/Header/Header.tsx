import { Box, HStack, Text } from "@chakra-ui/react";

import { HeaderContainer } from "src/components/atoms/headerContainer/HeaderContainer";
import { InputWithLeftIcon } from "src/components/molecules/InputWithRightIcon/InputWithRightIcon";
import { RiSettings4Fill } from "react-icons/ri";
import HeaderIconButton from "src/components/atoms/headerIconButton/HeaderIconButton";
import { useLocation } from "react-router-dom";

import * as routes from "src/utils/routePaths";

const Header = () => {
  let { pathname } = useLocation();
  const isProfile = pathname === routes.PROFILE_PATH;

  return (
    <Box pos="relative" boxShadow="0px 3px 6px #00000029;" zIndex={50}>
      <HeaderContainer pt={24} pb={16}>
        <HStack justifyContent="space-between">
          <Text fontSize="36px" fontWeight="semibold" lineHeight="48px">
            {isProfile ? "User Setup" : "Project Access"}
          </Text>
          {!isProfile && <InputWithLeftIcon />}
        </HStack>
      </HeaderContainer>
      <HeaderIconButton
        bgColor="#C6C6C6"
        icon={
          <RiSettings4Fill
            style={{ color: "#fff", width: "46px", height: "46px" }}
          />
        }
      />
    </Box>
  );
};

export default Header;
