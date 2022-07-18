import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as UserSVG } from "src/assets/icons/user-xl.svg";
import { ReactComponent as KeySvg } from "src/assets/icons/vpn_key-24px.svg";
import { useAppContext } from "src/components/context/appContext";
import { userService } from "src/services/use.service";

const { isActive, isDissabled } = userService;

const ProfileUserSection = () => {
  const { user } = useAppContext();
  return (
    <Flex direction="column" alignItems="center" maxW="232px">
      <Box pos="relative">
        <UserSVG />
        <Center
          pos="absolute"
          w="77px"
          h="51px"
          right="0"
          bottom="40px"
          bgColor="#7E7EF1"
          borderRadius="30px"
          cursor="pointer"
        >
          <KeySvg />
        </Center>
      </Box>
      <Flex direction="column" alignItems="center" {...isDissabled(user)}>
        <Text mt="14px" fontSize="14px" fontWeight="light" color="#B0ACAC">
          upload a photo
        </Text>
        <Text
          mt="31px"
          fontSize="48px"
          fontWeight="semibold"
          textAlign="center"
          lineHeight="48px"
        >
          {`${user?.firstName} ${user?.lastName}`}
        </Text>
        <Text mt="13px" fontSize="16px" fontWeight="light" lineHeight="21px">
          {user?.email}
        </Text>
      </Flex>
      {isActive(user) && (
        <Button
          mt="59px"
          variant="primary"
          bg="#7E7EF1"
          boxShadow="0px 3px 6px #00000029;"
        >
          Telegram
        </Button>
      )}
    </Flex>
  );
};

export default ProfileUserSection;
