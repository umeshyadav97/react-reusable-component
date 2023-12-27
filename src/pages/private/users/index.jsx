import React from "react"
import AppLoader from "components/Loader/AppLoader"
import { useUserController } from "./user.controller"
import { Divider, Box, TablePagination } from "@mui/material"
import AppTables from "components/Apptable"
function Users() {
  const {
    UserData,
    showLoader,
    handleChangePage,
    handleTableAction,
    handleChangeRowsPerPage,
    headers,
    page,
    rowsPerPageOptions,
    rowsPerPage
  } = useUserController()

  return (
    <Box style={{ maxWidth: "73vw" }}>
      {showLoader && <AppLoader />}
      <h2>Users</h2>

      <Divider />
      {UserData.length > 0 && (
        <>
          <AppTables
            headers={headers}
            keys={headers}
            data={UserData}
            rowsPerPageOptions={rowsPerPageOptions}
            ReadOnly={false}
            ActionKey="status"
            ActionArray={["Active"]}
            handleAction={() => handleTableAction()}
          />
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={UserData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Box>
  )
}

export default Users
