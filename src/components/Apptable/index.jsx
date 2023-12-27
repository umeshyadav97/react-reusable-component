import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { CircularProgress, Paper, TableContainer } from "@mui/material"
import TableSortLabel from "@mui/material/TableSortLabel"
import TextField from "@mui/material/TextField"
import { useStyles } from "./AppTableStyles"
import { Box } from "@mui/system"
import { ellipsizeText, capitalizeFirstLetter } from "./textUtils"
import ConfrimDialog from "./Confirm"
import { Button } from "@mui/material"
import { useAppTableController } from "./apptable.controller"

function AppTables(props) {
  const { keys } = props
  const atc = useAppTableController(props)

  const styles = useStyles()

  return (
    <Box sx={styles.PaperWrapper}>
      {atc.loading ? (
        <CircularProgress />
      ) : (
        <Paper>
          <Box sx={styles.drawer}>
            <TextField
              sx={styles.searchStyle}
              label="Search"
              value={atc.searchText}
              onChange={atc.handleSearch}
              variant="outlined"
            />
          </Box>

          <TableContainer>
            <Table>
              <TableHead sx={styles.tableBackground}>
                <TableRow>
                  {keys?.map((keyy, index) => (
                    <TableCell key={index}>
                      <TableSortLabel
                        active={atc.orderBy === keyy}
                        direction={atc.orderBy === keyy ? atc.order : "asc"}
                        onClick={() => atc.handleSort(keyy)}>
                        {capitalizeFirstLetter(keyy)}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {atc.updateData?.map((row, index) => (
                  <TableRow key={index}>
                    {keys?.map((header, index) => (
                      <TableCell key={index}>
                        {row[header]?.type !== "button" && typeof row[header] !== "object" ? (
                          ellipsizeText(row[header], 30)
                        ) : (
                          <Box style={{ display: "flex" }}>
                            {row[header]?.map((item, index) => (
                              <Button
                                key={index}
                                variant="contained"
                                style={{ backgroundColor: `${item.color}`, marginRight: "5px" }}
                                onClick={atc.handleConfirmModal}>
                                {item.value}
                              </Button>
                            ))}
                          </Box>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {atc.updateData?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7}>No data found.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {atc.confirmModal && (
            <ConfrimDialog
              open={atc.confirmModal}
              handleClose={() => atc.handleConfirmModal()}
              title={"Are you sure you want to perform this action?"}
              confirm={(value) => atc.handleActions(value)}
              backdropDisable={true}></ConfrimDialog>
          )}
        </Paper>
      )}
    </Box>
  )
}

export default AppTables
