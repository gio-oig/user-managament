import { useCallback, useEffect, useMemo, useState } from "react";
import { IUserObject, IUserTableColumn } from "src/types";
import { UserInfoCell } from "./cells/UserInfoCell";
import { UserRoleCell } from "./cells/UserRoleCell";
import { UserStatusSwitch } from "./cells/UserStatusSwitch";
import { UserTableHeader } from "./cells/UserTableHeader";

import {
  Cell,
  Hooks,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { UserProfileButton } from "./cells/UserProfileButton";
import { Text } from "@chakra-ui/react";
import { UserActionHeaderCell } from "./cells/UserActionHeaderCell";
import { UserActionsCell } from "./cells/UserActionCell";
import { useAppContext } from "src/components/context/appContext";

export const useUsertable = () => {
  const { users, search } = useAppContext();
  const [data, setData] = useState(users);

  const resetDataAfterSearch = useCallback(() => {
    if (!search && data.length !== users.length) {
      setData(users);
    }
  }, [data, search, users]);

  useEffect(() => {
    if (!search) return;
    setData(filterUsersByString(users, search));
  }, [users, search]);

  useEffect(() => {
    setData(users);
  }, [users]);

  useEffect(() => {
    resetDataAfterSearch();
  }, [resetDataAfterSearch]);

  function filterUsersByString(arr: IUserObject[], str: string) {
    return arr.filter(({ firstName, lastName }) => {
      const fullName = `${firstName} ${lastName}`;
      return fullName.toLocaleLowerCase().includes(str.toLocaleLowerCase());
    });
  }

  const columns = useMemo<IUserTableColumn[]>(
    () => [
      {
        width: 450,
        Header: UserTableHeader,
        accessor: "user",
        Cell: UserInfoCell,
      },
      {
        Header: UserTableHeader,
        accessor: "role",
        Cell: UserRoleCell,
      },
      {
        Header: UserTableHeader,
        accessor: "status",
        Cell: UserStatusSwitch,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // pagination
    prepareRow,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
    useRowSelect,
    // @ts-ignore
    getAdditionalColumns
  );

  function checkIfActive(cell: Cell<IUserObject, any>) {
    const status = cell.row.original.status;
    return status === "active";
  }

  // Adding some columns to the table
  function getAdditionalColumns(hooks: Hooks<IUserObject>) {
    hooks.visibleColumns.push((columns) => [
      {
        // Selection - first column
        id: "selection",
        maxWidth: 80,
        Header: () => <Text />,
        // @ts-ignore
        Cell: ({ row }) => {
          return <UserProfileButton {...row.getToggleRowSelectedProps()} />;
        },
      },
      // @ts-ignore
      ...columns,
      {
        // Actions collumn
        id: "actions",
        Header: UserActionHeaderCell,
        // @ts-ignore
        Cell: UserActionsCell,
      },
    ]);
  }

  return {
    data,
    columns,
    getAdditionalColumns,
    checkIfActive,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    pageSize,
    pageIndex,
  };
};
