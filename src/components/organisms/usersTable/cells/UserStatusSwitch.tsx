import { Flex, Switch } from "@chakra-ui/react";
import { Cell } from "react-table";
import { useAppContext } from "src/components/context/appContext";
import { IUserObject } from "src/types";

export const UserStatusSwitch: React.FC<Cell<IUserObject>> = (cell) => {
  const user = cell.row.original;
  const { changeUserStatus } = useAppContext();
  return (
    <Flex w="full" h="full" align={"center"}>
      <Switch
        size="md"
        pl="4"
        isChecked={user.status === "active"}
        onChange={() => changeUserStatus(user)}
      />
    </Flex>
  );
};
