import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";
import { useAppContext } from "src/components/context/appContext";
import { debounce } from "lodash";

const placeholderStyles = {
  color: "inherit",
  fontWeight: "light",
  fontStyle: "italic",
};

export const HeaderSearch = () => {
  const { setSerch } = useAppContext();

  function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    setSerch((e.target as HTMLInputElement).value);
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  return (
    <InputGroup w="auto">
      <Input
        variant="flushed"
        placeholder="Type to filter users..."
        borderBottom="2px"
        _placeholder={placeholderStyles}
        onChange={debouncedChangeHandler}
      />
      <InputRightElement children={<SearchIcon />} opacity={0.8} />
    </InputGroup>
  );
};
