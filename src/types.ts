import { Td, Th } from "@chakra-ui/react";
import { ComponentProps } from "react";

type IUserRole = "admin" | "user";
type Status = "active" | "inactive";

interface Rule {
  isActive: boolean;
  name: string;
}

interface UserPermission {
  isActive: boolean;
  rules: Rule[];
}

export interface IBaseUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: IUserRole;
}

export type IUserTableColumnTypes = keyof IBaseUser;

export interface IUserObject extends IBaseUser {
  status: Status;
  permissions: UserPermission[];
}

export interface IUserTableColumn {
  Header: any;
}
export type TdProps = ComponentProps<typeof Td>;

export type ThProps = ComponentProps<typeof Th>;
