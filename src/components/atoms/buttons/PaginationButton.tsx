import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginButtonProps {
  isActive: boolean;
  defaultColor?: ButtonProps["color"];
  activeColor?: ButtonProps["color"];
  defaultBgColor?: ButtonProps["bg"];
  activeBgColor?: ButtonProps["bg"];
}

export const PaginationButton: React.FC<PaginButtonProps & ButtonProps> = ({
  isActive,
  children,
  defaultColor = "brandBlack",
  activeColor = "brandBlue.400",
  defaultBgColor = "transparent",
  activeBgColor = "brandBlue.100",
  ...rest
}) => {
  return (
    <Button
      variant="ghost"
      color={isActive ? activeColor : defaultColor}
      bg={isActive ? activeBgColor : defaultBgColor}
      borderRadius={"100px"}
      {...rest}
    >
      {children}
    </Button>
  );
};
