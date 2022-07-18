import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButtonProps,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface InputOutLineWithIconProps {
  icon?: any;
  label: string;
  error?: { message?: string };
}

const InputOutLineWithIcon = forwardRef<
  HTMLInputElement,
  InputOutLineWithIconProps & InputProps
>(({ icon: Icon, error, label, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  const message = error?.message;
  return (
    <Flex pos="relative" w="100%">
      <FormControl isInvalid={!!message}>
        <FormLabel color="#33A3DC" fontSize={12} m="0" htmlFor="name">
          * {label}
        </FormLabel>
        <Input id="name" height="auto" variant="flushed" ref={ref} {...rest} />
        <FormErrorMessage>{message}</FormErrorMessage>
      </FormControl>
    </Flex>
  );
});

export default InputOutLineWithIcon;
