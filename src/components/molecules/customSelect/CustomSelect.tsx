import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";
import React, { forwardRef, ReactNode } from "react";

interface CustomSelectProps {
  label: string;
  children: ReactNode;
  error?: { message?: string };
}

const CustomSelect = forwardRef<
  HTMLSelectElement,
  CustomSelectProps & SelectProps
>(({ children, error, label, ...rest }, ref: React.Ref<HTMLSelectElement>) => {
  const message = error?.message;
  return (
    <FormControl mb="24.5px" isInvalid={!!message}>
      <FormLabel ml="-7px" color="#33A3DC" fontSize={12} htmlFor="name">
        * {label}
      </FormLabel>
      <Select
        id="name"
        variant="flushed"
        height="auto"
        borderColor="#C6C6C6"
        color="#C6C6C6"
        ref={ref}
        {...rest}
      >
        {children}
      </Select>
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormControl>
  );
});

export default CustomSelect;
