import { Flex, Text, VStack } from "@chakra-ui/react";
import { CellProps } from "react-table";
import { IUserObject } from "src/types";

export const UserInfoCell: React.FC<CellProps<IUserObject>> = ({
  row: {
    original: { firstName, lastName, email },
  },
}) => {
  return (
    <Flex w="full" h="full">
      <VStack align={"flex-start"} spacing="1" px="2">
        <Text fontWeight="bold">{`${firstName} ${lastName}`}</Text>
        <Text fontWeight="light">{email}</Text>
      </VStack>
    </Flex>
  );
};
