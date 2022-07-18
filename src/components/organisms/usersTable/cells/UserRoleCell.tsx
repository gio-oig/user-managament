import { Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Cell } from "react-table";
import { KeyIcon } from "src/components/atoms/icons";
import { IUserObject } from "src/types";
import { capitalize, isAdmin } from "src/utils/functions";

export const UserRoleCell: React.FC<Cell<IUserObject>> = ({
  row: {
    original: { role, status },
  },
}) => (
  <Flex w="full" h="full" align={"center"}>
    <HStack spacing={0} position="relative">
      {isAdmin(role) ? (
        <Center
          position="absolute"
          left="-50px"
          p="3px 12px"
          bgColor={status === "active" ? "#7E7EF1" : undefined}
          borderRadius="30px"
          cursor="pointer"
        >
          <KeyIcon
            boxSize={5}
            color={status === "active" ? "white" : "black"}
          />
        </Center>
      ) : null}
      <Text>{capitalize(role)}</Text>
    </HStack>
  </Flex>
);
