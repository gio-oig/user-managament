import { useForm } from "react-hook-form";
import { Button, Text, Switch, Flex, useToast } from "@chakra-ui/react";
import CustomOutlineInput from "src/components/molecules/customOutlineInput/CustomOutlineInput";
import CustomSelect from "src/components/molecules/customSelect/CustomSelect";
import { useAppContext } from "src/components/context/appContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userService } from "src/services/use.service";

import { IBaseUser } from "src/types";
import { useEffect, useMemo, useState } from "react";

const { isActive, isDissabled } = userService;

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    role: yup.string().required(),
  })
  .required();

const ProfileFormSection = () => {
  const { user, updateUser, setUser } = useAppContext();
  const [defaultValues, setDefaultValues] = useState<IBaseUser | null>(null);

  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IBaseUser>({
    defaultValues: useMemo(() => {
      return { ...user };
    }, [user]),
    resolver: yupResolver(schema),
  });

  function onSubmit(values: IBaseUser) {
    if (user) {
      updateUser({
        ...user,
        ...values,
      });
      toast({
        title: "Updated Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const handleStatusChange = () => {
    setUser((user) => {
      if (user) {
        return {
          ...user,
          status: isActive(user) ? "inactive" : "active",
        };
      }
      return null;
    });
  };

  useEffect(() => {
    if (user && !defaultValues) {
      setDefaultValues(user);
    }
  }, [user, defaultValues]);

  useEffect(() => {
    reset({
      firstName: defaultValues?.firstName,
      lastName: defaultValues?.lastName,
      role: defaultValues?.role,
    });
  }, [defaultValues, reset]);

  return (
    <>
      <Text fontSize="4xl" fontWeight="semibold" lineHeight="48px">
        Details
      </Text>
      <Flex pos="relative" w="100%" mt="55px" mb="45px">
        <Switch
          pos="absolute"
          left="-50px"
          isChecked={isActive(user)}
          onChange={handleStatusChange}
        />
        <Text ml={0} fontWeight="light" {...isDissabled(user)}>
          This user is <b>{isActive(user) ? "Active" : "Inactive"}</b>
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)} style={isDissabled(user)}>
        <CustomOutlineInput
          label="First name"
          htmlFor="first-name"
          error={errors.firstName}
          {...register("firstName")}
        />
        <CustomOutlineInput
          label="Last name"
          htmlFor="lats-name"
          error={errors.lastName}
          {...register("lastName")}
        />
        <CustomSelect label="Role" error={errors.role} {...register("role")}>
          <option value={"user"}>User</option>
          <option value={"admin"}>Admin</option>
        </CustomSelect>
        {isActive(user) ? (
          <Button
            mt={4}
            variant="primary"
            bgColor="#44A0D3"
            isLoading={isSubmitting}
            boxShadow="0px 3px 6px #00000029;"
            type="submit"
          >
            Submit
          </Button>
        ) : null}
      </form>
    </>
  );
};

export default ProfileFormSection;
