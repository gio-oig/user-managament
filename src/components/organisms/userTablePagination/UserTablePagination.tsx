import { HStack, Select, Text } from "@chakra-ui/react";
import { ButtonIconRound } from "src/components/atoms/buttons/ButtonIconRounded";
import { PaginationButton } from "src/components/atoms/buttons/PaginationButton";
import { DropdownIcon } from "src/components/atoms/icons/Dropdown";
import { usePag } from "src/hooks/usePagination";

interface PaginationProps {
  pageSize: number;
  setPageSize: any;
  pageIndex: number;
  previousPage: any;
  pageCount: number;
  gotoPage: any;
  nextPage: any;
}

export const UserTablePagination: React.FC<PaginationProps> = ({
  pageSize,
  setPageSize,
  pageIndex,
  previousPage,
  pageCount,
  gotoPage,
  nextPage,
}) => {
  const { generatePagesToShow } = usePag();

  const pageNumbersToShow = generatePagesToShow(pageCount, pageIndex);

  return (
    <HStack w="full" justify="space-between" mt={4} px="80px">
      <HStack w="220px" justify="space-between">
        <Text wordBreak={"keep-all"}>Records on page</Text>
        <Select
          w="80px"
          value={pageSize}
          onChange={(e) => setPageSize(+e.currentTarget.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Select>
      </HStack>
      <HStack>
        <ButtonIconRound
          isDisabled={pageIndex === 0}
          aria-label="go preview page"
          onClick={previousPage}
          icon={<DropdownIcon transform={"rotate(90deg)"} />}
        />
        {pageNumbersToShow.map((page) => {
          if (page === "dots") {
            return <Text key={page}>...</Text>;
          } else {
            return (
              <PaginationButton
                key={page}
                isActive={pageIndex === page}
                onClick={() => {
                  gotoPage(page);
                }}
              >
                {page + 1}
              </PaginationButton>
            );
          }
        })}

        <ButtonIconRound
          isDisabled={pageIndex === pageCount - 1}
          onClick={nextPage}
          aria-label="go next page"
          icon={<DropdownIcon transform={"rotate(-90deg)"} />}
        />
      </HStack>
    </HStack>
  );
};
