import {
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EmailIcon, FaceIcon, KeyIcon } from "src/components/atoms/icons";
import { useAppContext } from "src/components/context/appContext";
import InputOutLineWithIcon from "src/components/molecules/inputOutLineWithIcon/InputOutLineWithIcon";
import { IBaseUser } from "src/types";
import { ModalWrapper } from "../modalWrapper/ModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    role: yup.string().required(),
  })
  .required();

const NewUserModal = () => {
  const { createUser, isAddUserModalOpened, closeAddUserModal } =
    useAppContext();
  const [isOk, setIsOk] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<IBaseUser>({
    resolver: yupResolver(schema),
  });

  function onSubmit(values: IBaseUser) {
    createUser(values);
    closeAddUserModal();
  }

  useEffect(() => {
    const subscription = watch(async (value, _) => {
      await schema
        .validate(value)
        .then(() => {
          setIsOk(true);
        })
        .catch((err) => console.log(err));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <ModalWrapper isOpen={isAddUserModalOpened} onClose={closeAddUserModal}>
      <VStack w="full" align={"start"}>
        <Heading p="0">Invite New User</Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <ModalFormRowWithIcon icon={FaceIcon}>
            <InputOutLineWithIcon
              label="First name"
              error={errors.firstName}
              {...register("firstName")}
            />
            <InputOutLineWithIcon
              label="Last name"
              error={errors.lastName}
              {...register("lastName")}
            />
          </ModalFormRowWithIcon>
          <ModalFormRowWithIcon icon={EmailIcon}>
            <InputOutLineWithIcon
              label="Email"
              error={errors.email}
              {...register("email")}
            />
          </ModalFormRowWithIcon>

          <ModalFormRowWithIcon icon={KeyIcon} height="50px">
            <Flex direction="column">
              <FormLabel color="#33A3DC" fontSize={12} m="0" htmlFor="name">
                * Role
              </FormLabel>
              <FormControl isInvalid={!!errors.role}>
                <Select
                  maxW="219px"
                  id="role"
                  height="auto"
                  variant="flushed"
                  {...register("role", {
                    required: "This is required",
                  })}
                >
                  <option hidden></option>
                  <option value={"user"}>User</option>
                  <option value={"admin"}>Admin</option>
                </Select>
                <FormErrorMessage>
                  {errors.role && errors.role.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalFormRowWithIcon>
          <HStack mt={4} alignItems="center" justifyContent="space-between">
            <Button
              variant="primary"
              bgColor={isOk ? "#44A0D3" : "#C6C6C6"}
              size="lg"
              p="10px 30px"
              isLoading={isSubmitting}
              type="submit"
              disabled={!isOk}
            >
              Send Invitation
            </Button>

            {isOk ? (
              <Text color="#44D36A">Good to go</Text>
            ) : (
              <Text color="#F89797">Fill in all the fields</Text>
            )}
          </HStack>
        </form>
      </VStack>
    </ModalWrapper>
  );
};

export default NewUserModal;

const ModalFormRowWithIcon: FC<
  { children: React.ReactNode; icon: any } & FlexProps
> = ({ children, icon: Icon, height = "70px", ...rest }) => {
  return (
    <Flex height={height} pos="relative" gap="10px" {...rest}>
      <Icon pos="absolute" top="20px" left="-20px" />
      {children}
    </Flex>
  );
};
