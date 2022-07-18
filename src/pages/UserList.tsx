import { Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppContext } from "src/components/context/appContext";
import DeleteUserModal from "src/components/organisms/modals/deleteUserModal/DeleteUserModal";
import NewUserModal from "src/components/organisms/modals/newUserModal/NewUserModal";
import UsersTable from "src/components/organisms/usersTable/UsersTable";

const UserList = () => {
  const { setUser } = useAppContext();
  useEffect(() => {
    setUser(null);
  }, [setUser]);
  return (
    <Center>
      <UsersTable />
      <NewUserModal />
      <DeleteUserModal />
    </Center>
  );
};

export default UserList;
