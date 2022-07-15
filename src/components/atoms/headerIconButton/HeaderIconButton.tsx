import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";

type HeaderIconButtonProps = {
  icon: any;
  bgColor?: IconButtonProps["bgColor"];
};

const HeaderIconButton: FC<HeaderIconButtonProps> = ({ icon, bgColor }) => {
  return (
    <IconButton
      pos="absolute"
      bottom="0"
      transform="translateY(50%)"
      left="5%"
      bgColor={bgColor}
      aria-label="Call Segun"
      borderRadius="100%"
      w="72px"
      h="72px"
      icon={icon}
    />
  );
};

export default HeaderIconButton;
