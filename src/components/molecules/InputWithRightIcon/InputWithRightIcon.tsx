import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";

type InputWithLeftIconProps = {
  icon?: any;
};

export const InputWithLeftIcon: React.FC<InputWithLeftIconProps> = ({
  icon: Icon,
}) => {
  //   const dispatch = useAppDispatch();

  //   function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
  //     dispatch(setSearchWord((e.target as HTMLInputElement).value));
  //   }

  //   const debouncedChangeHandler = useMemo(
  //     () => debounce(changeHandler, 300),
  //     []
  //   );

  return (
    <InputGroup w="auto">
      <Input
        variant="flushed"
        placeholder="Type to filter users..."
        borderBottom="2px"
        borderColor="#707070"
        onChange={() => {}}
      />
      <InputRightElement children={<SearchIcon />} opacity={0.8} />
    </InputGroup>
  );
};
