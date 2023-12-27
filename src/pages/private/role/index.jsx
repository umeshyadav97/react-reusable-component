import { Box, Button, Divider, Stack } from "@mui/material"
import RolesListing from "components/Roles/RolesListing"
import React from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import useRoleController from "./role.controller"
import WithPermission from "components/RBAC/permissionHoc"

const Roles = () => {
  const rc = useRoleController()

  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <h2>Roles</h2>
        <WithPermission module={rc.module} permission={"create"}>
          <Box m={2} mr={0}>
            <Button
              variant="contained"
              size="large"
              onClick={() => rc.handleNavigation("/u/roles/add")}>
              Add Roles +
            </Button>
          </Box>
        </WithPermission>
      </Stack>
      <Divider />

      {/*------ Listing -----*/}
      <h3>List of Roles</h3>

      <RolesListing
        tableHeading={["Roles", "Description", "Actions"]}
        listData={rc.listData}
        actionBtn={
          WithPermission({ module: rc.module, permission: ["update", "delete"] }) ? (
            <MoreVertIcon />
          ) : null
        }
        actionsMenu={[
          WithPermission({ module: rc.module, permission: "update" }) && {
            label: "Edit",
            handleClick: rc.handleEditRole
          },
          WithPermission({ module: rc.module, permission: "delete" }) && {
            label: "Delete",
            handleClick: rc.handleDeleteRole
          }
        ]}
      />
    </div>
  )
}

export default Roles
