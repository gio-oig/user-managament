import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { userService } from "src/services/use.service";
import { IBaseUser, IUserObject } from "src/types";

interface IAppContext {
  user: IUserObject | null;
  setUser: Dispatch<SetStateAction<IUserObject | null>>;
  users: IUserObject[];
  search: string;
  getUser: (userId: string) => void;
  createUser: (user: IBaseUser) => void;
  updateUser: (user: IUserObject) => void;
  changeUserStatus: (user: IUserObject | null) => void;
  changeUserRuleStatus: (permissionIndex: number, ruleIndex: number) => void;
  changeUserPermissionGroupStatus: (permissionIndex: number) => void;
  deleteUser: (userId: string) => void;
  setSerch: Dispatch<SetStateAction<string>>;
  isAddUserModalOpened: boolean;
  openAddUserModal: () => void;
  closeAddUserModal: () => void;
  isDeleteUserModal: boolean;
  openDeleteModal: (user: IUserObject) => void;
  closeDeleteModal: () => void;
}

const newUserData = {
  permissions: [
    {
      isActive: true,
      rules: [
        {
          isActive: true,
          name: "permission1",
        },
        {
          isActive: true,
          name: "permission2",
        },
        {
          isActive: false,
          name: "permission3",
        },
      ],
    },
    {
      isActive: true,
      rules: [
        {
          isActive: true,
          name: "permission1",
        },
      ],
    },
  ],
};

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<IUserObject[]>([]);
  const [user, setUser] = useState<IUserObject | null>(null);
  const [search, setSerch] = useState("");

  const [isAddUserModalOpened, setIsAddUserModalOpened] = useState(false);
  const [isDeleteUserModal, setIsDeleteUserModal] = useState(false);

  const getUser = async (userId: string) => {
    const user = await userService.getUser(userId);
    setUser(user);
  };

  const getUsers = async () => {
    const users = await userService.getUsers();
    setUsers(users);
  };

  const createUser = async (newUser: IBaseUser) => {
    const mergedData: IUserObject = {
      ...newUserData,
      ...newUser,
      status: "active",
    };
    await userService.addUser(mergedData);
    getUsers();
  };

  const updateUser = async (props: IUserObject) => {
    await userService.updateUser(props);
    await getUsers();
  };

  const deleteUser = async (userId: string) => {
    await userService.deleteUser(userId);
    await getUsers();
    setIsDeleteUserModal(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const openDeleteModal = (user: IUserObject) => {
    setIsDeleteUserModal(true);
    setUser(user);
  };

  const changeUserStatus = (user: IUserObject | null) => {
    if (!user) return;
    const changedUserStatus: IUserObject = {
      ...user,
      status: user.status === "active" ? "inactive" : "active",
    };
    updateUser(changedUserStatus);
  };

  const changeUserRuleStatus = (permissionIndex: number, ruleIndex: number) => {
    setUser((user) => {
      if (user) {
        const permission = user.permissions[permissionIndex].rules[ruleIndex];
        permission.isActive = !permission.isActive;

        return { ...user };
      }

      return user;
    });
  };

  const changeUserPermissionGroupStatus = (permissionIndex: number) => {
    setUser((user) => {
      if (user) {
        const permissionsGroup = user.permissions[permissionIndex];

        permissionsGroup.isActive = !permissionsGroup.isActive;

        for (const item of permissionsGroup.rules) {
          item.isActive = permissionsGroup.isActive;
        }

        return { ...user };
      }

      return user;
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        users,
        search,
        setSerch,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        changeUserStatus,
        changeUserRuleStatus,
        changeUserPermissionGroupStatus,
        isAddUserModalOpened,
        openAddUserModal: () => setIsAddUserModalOpened(true),
        closeAddUserModal: () => setIsAddUserModalOpened(false),
        isDeleteUserModal,
        openDeleteModal,
        closeDeleteModal: () => setIsDeleteUserModal(false),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const value = useContext(AppContext);

  if (!value) {
    throw new Error("AppContext Provider is not defined");
  }
  return value;
}
