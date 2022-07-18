import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  Switch,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useAppContext } from "src/components/context/appContext";

import { userService } from "src/services/use.service";

const { isDissabled } = userService;

const ProfilePermissionsSection = () => {
  const { user, changeUserRuleStatus, changeUserPermissionGroupStatus } =
    useAppContext();
  return (
    <>
      <Flex w="100%" mb="54px" justifyContent="space-between">
        <Text fontSize="4xl" fontWeight="semibold" lineHeight="12">
          Permissions
        </Text>
        <Text
          alignSelf="flex-end"
          fontWeight="light"
          fontSize="md"
          lineHeight="35px"
        >
          admin
        </Text>
      </Flex>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        {...isDissabled(user)}
      >
        <Text fontWeight="bold" fontSize="md">
          Super Admin
        </Text>
        <Switch />
      </Flex>
      <Accordion allowToggle w="100%" {...isDissabled(user)}>
        {user?.permissions.map(({ isActive, rules }, index) => {
          return (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Text
                    flex={1}
                    lineHeight="21px"
                    fontSize="16px"
                    fontWeight="semibold"
                    textAlign="left"
                  >
                    {`Section ${index + 1} title`}
                  </Text>
                  <Switch
                    isChecked={isActive}
                    onChange={() => {
                      changeUserPermissionGroupStatus(index);
                    }}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList spacing="12px">
                  {rules.map(({ isActive, name }, i) => {
                    return (
                      <ListItem display="flex" alignItems="center">
                        <Box
                          w={1.5}
                          h={1.5}
                          bgColor={isActive ? "#44A0D3" : "#FF0000"}
                          borderRadius="50px"
                          mr="12px"
                        />
                        <Text
                          lineHeight="21px"
                          fontSize="16px"
                          fontWeight="semibold"
                        >
                          {name}
                        </Text>
                        <Switch
                          ml="auto"
                          isChecked={isActive}
                          onChange={() => {
                            changeUserRuleStatus(index, i);
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default ProfilePermissionsSection;
