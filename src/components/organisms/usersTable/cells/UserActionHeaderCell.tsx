import { Flex } from "@chakra-ui/react";
import { UserTableHeader } from "./UserTableHeader";

export const UserActionHeaderCell: any = (props: any) => {
  return (
    <Flex>
      <UserTableHeader {...props} />
    </Flex>
  );
};
