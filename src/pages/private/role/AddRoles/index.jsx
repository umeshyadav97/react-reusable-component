import React from "react"
import AddRolesComponent from "components/Roles/AddRoles"
import { DashboardMenus } from "router/routes/dashboardRoutes"
import { Box, Divider, IconButton, Stack } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import useAddRoleController from "./addRole.controller"

const AddRoles = () => {
  const arc = useAddRoleController()
  return (
    <>
      <Stack direction="row" alignItems="center">
        <Box>
          <IconButton onClick={() => arc.handleNavigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <h2>{arc.defaultData ? "Edit" : "Add"} Role Here</h2>
      </Stack>
      <Divider />
      <AddRolesComponent
        setDefaultData={arc.defaultData}
        modules={DashboardMenus.map((item) => item.title)}
        handleSave={arc.handleAddRole}
        groupedPermission
      />
    </>
  )
}

export default AddRoles
