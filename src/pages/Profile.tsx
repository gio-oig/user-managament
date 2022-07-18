import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "src/components/context/appContext";
// import { useAppContext } from 'src/components/context/appContext';
import ProfileFormSection from "src/components/organisms/profileFormSection/ProfileFormSection";
import ProfilePermissionsSection from "src/components/organisms/profilePermissionsSection/ProfilePermissionsSection";
import ProfileUserSection from "src/components/organisms/profileUserSection/ProfileUserSection";

const Profile = () => {
  const { id } = useParams();
  const { getUser } = useAppContext();
  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  return (
    <Flex>
      <Flex direction="column" alignItems="flex-start" flex={1}>
        <ProfileUserSection />
      </Flex>
      <Flex direction="column" alignItems="flex-start" flex={1}>
        <ProfileFormSection />
      </Flex>
      <Flex direction="column" alignItems="flex-start" flex={1}>
        <ProfilePermissionsSection />
      </Flex>
    </Flex>
  );
};

export default Profile;
