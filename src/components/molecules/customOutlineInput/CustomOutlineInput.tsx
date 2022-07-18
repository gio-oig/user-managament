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

interface CustomOutlineInputProps {
  icon?: any;
  label: string;
  htmlFor: string;
  error?: { message?: string };
}

const CustomOutlineInput = forwardRef<
  HTMLInputElement,
  CustomOutlineInputProps & InputProps
>(({ error, label, htmlFor, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  const message = error?.message;
  return (
    <FormControl mb="24.5px" isInvalid={!!message}>
      <FormLabel ml="-7px" color="#33A3DC" fontSize={12} htmlFor={htmlFor}>
        * {label}
      </FormLabel>
      <Input
        id={htmlFor}
        height="auto"
        variant="flushed"
        borderColor="#C6C6C6"
        ref={ref}
        {...rest}
      />
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormControl>
  );
});

export default CustomOutlineInput;
