import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { DropdownIcon } from "src/components/atoms/icons/Dropdown";

export const UserTableHeader = (props: any) => {
  const {
    column: { id, isSorted },
  } = props;
  return (
    <Button variant={"ghost"} _hover={{ background: "transparent" }} px="2">
      <HStack justifyContent="flex-start" opacity={isSorted ? 1 : 0.5}>
        <Text fontWeight={700}>{id.toUpperCase()}</Text>
        <Icon
          as={DropdownIcon}
          w="3"
          display={id === "actions" ? "none" : "block"}
          transform={isSorted ? "rotate(180deg)" : "rotate(0deg)"}
        />
      </HStack>
    </Button>
  );
};
