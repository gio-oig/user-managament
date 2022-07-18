import { IconButton, IconButtonProps } from "@chakra-ui/react";

interface ButtonRoundProps {
  isSelected?: boolean;
}

export const ButtonIconRound: React.FC<ButtonRoundProps & IconButtonProps> = ({
  icon: Icon,
  isSelected,
  children,
  ...rest
}) => {
  return (
    <IconButton
      borderRadius={"100px"}
      border="1px solid rgba(38, 41, 46, 0.1);"
      bg={isSelected ? "#2A84FF" : "transparent"}
      _hover={{
        background: isSelected ? "#2A84FF" : "transparent",
      }}
      icon={Icon}
      {...rest}
    />
  );
};
