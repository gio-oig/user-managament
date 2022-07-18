import {
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CloseIcon } from "src/components/atoms/icons";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWrapper: React.FC<ModalWrapperProps & ModalBodyProps> = ({
  isOpen,
  onClose,
  children,
  maxW = "646px",
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent px="20px" py="22px" borderRadius={2} maxW={maxW}>
        <ModalHeader display="flex" p="0" placeContent="end">
          <CloseIcon cursor="pointer" onClick={onClose} />
        </ModalHeader>
        <ModalBody pl="50px" pr="41px" {...rest}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
