import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Cell } from "react-table";
import { RiSettings4Fill } from "react-icons/ri";
import { IUserObject } from "src/types";
import { IoMdTrash } from "react-icons/io";
import { useAppContext } from "src/components/context/appContext";
import { PROFILE_PATH_ } from "src/utils";

const iconStyles = { color: "#c6c6c6", width: "20px", height: "20px" };

export const UserActionsCell: React.FC<Cell<IUserObject>> = ({
  row: { original: user },
}) => {
  const { openDeleteModal } = useAppContext();
  let navigate = useNavigate();

  function handleSettingClick() {
    navigate(`${PROFILE_PATH_}${user.id}`);
  }

  return (
    <Flex h="full" alignItems="center" gap={4}>
      <RiSettings4Fill
        onClick={handleSettingClick}
        style={iconStyles}
        cursor="pointer"
        visibility={user.status === "active" ? "vissible" : "hidden"}
      />
      <IoMdTrash
        onClick={() => openDeleteModal(user)}
        style={iconStyles}
        cursor="pointer"
      />
    </Flex>
  );
};
