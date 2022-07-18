import { Button, Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { FaceIcon } from "src/components/atoms/icons";
import { useAppContext } from "src/components/context/appContext";
import { ModalWrapper } from "src/components/organisms/modals/modalWrapper/ModalWrapper";

const DeleteUserModal = () => {
  const { user, deleteUser, isDeleteUserModal, closeDeleteModal } =
    useAppContext();
  return (
    <ModalWrapper isOpen={isDeleteUserModal} onClose={closeDeleteModal}>
      <Flex direction="column" w="100%" align={"start"}>
        <Heading p="0" ml="40px" mb="41px">
          Delete User
        </Heading>
        <Flex w="100%" justifyContent="flex-start">
          <FaceIcon
            boxSize={5}
            mb="auto"
            mt="3px"
            mr={5}
            onClick={closeDeleteModal}
          />
          <Flex direction="column" ml={0} alignItems="normal" flex={1}>
            <HStack justifyContent="space-between" mb="32px">
              <Text fontWeight="light">{`${user?.firstName} ${user?.lastName}`}</Text>
              <Text color="#44A0D3" fontSize="md" fontWeight="bold">
                {user?.status === "active" ? "Active" : "Inactive"} User
              </Text>
            </HStack>
            <Divider />
          </Flex>
        </Flex>
        <Button
          variant="primary"
          bgColor="#F79696"
          ml="40px"
          mt="20px"
          size="lg"
          p="10px 30px"
          onClick={() => user && deleteUser(user?.id)}
        >
          Delete User
        </Button>
      </Flex>
    </ModalWrapper>
  );
};

export default DeleteUserModal;
