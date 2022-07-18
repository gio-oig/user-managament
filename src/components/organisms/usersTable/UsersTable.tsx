import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Text,
  Flex,
} from "@chakra-ui/react";

import { useUsertable } from "./useUserTable";
import { UserTablePagination } from "src/components/organisms/userTablePagination/UserTablePagination";

const UsersTable = () => {
  const {
    checkIfActive,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageSize,
    setPageSize,
    pageIndex,
    previousPage,
    pageCount,
    gotoPage,
    nextPage,
  } = useUsertable();

  return (
    <Flex w="100%" direction="column">
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  // @ts-ignore
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {/* {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null} */}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    opacity={!checkIfActive(cell) ? 0.5 : 1}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <UserTablePagination
        gotoPage={gotoPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        previousPage={previousPage}
        setPageSize={setPageSize}
      />
    </Flex>
  );
};

export default UsersTable;
