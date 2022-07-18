import { IUserObject } from "src/types";
import axios from "axios";

const baseUrl = "http://localhost:3001/users";

const getUser = async (userId: string) => {
  const { data } = await axios.get<IUserObject>(`${baseUrl}/${userId}`);
  return data;
};

const getUsers = async () => {
  const { data } = await axios.get<IUserObject[]>(baseUrl);
  return data;
};

const addUser = async (newUser: IUserObject) => {
  const { data } = await axios.post<IUserObject>(baseUrl, newUser);
  return data;
};

const updateUser = async (user: IUserObject) => {
  const { data } = await axios.put(`${baseUrl}/${user.id}`, user);
  return data as IUserObject;
};

const deleteUser = async (id: string) => {
  const result = await axios.delete(`${baseUrl}/${id}`);
  if (result.status === 200) {
    return true;
  }
  throw new Error(
    "Could not delete the user" + result.status + result.statusText
  );
};

const isActive = (user: IUserObject | null) => {
  if (user) {
    return user.status === "active";
  }

  return false;
};

const disabledProps = { opacity: 0.5, pointerEvents: "none" };
const isDissabled = (user: IUserObject | null) =>
  isActive(user) ? {} : disabledProps;

export const userService = {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  isActive,
  isDissabled,
};
