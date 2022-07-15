import { Container, ContainerProps } from "@chakra-ui/react";

export const HeaderContainer: React.FC<ContainerProps> = ({
  maxW = "1180px",
  m = "auto",
  children,
  ...rest
}) => {
  return (
    <Container maxW={maxW} m={m} {...rest}>
      {children}
    </Container>
  );
};
