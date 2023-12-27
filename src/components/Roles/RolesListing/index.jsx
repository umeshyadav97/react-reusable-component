import {
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material"
import React from "react"
import useRoleListingController from "./rolesListing.controller"
import MoreVertIcon from "@mui/icons-material/MoreVert"

const RolesListing = (props) => {
  const { actionBtn, actionsMenu } = props
  const rlc = useRoleListingController(props)
  return (
    <React.Fragment>
      <TableContainer sx={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.3)" }}>
        <Table>
          <TableHead>
            <TableRow>
              {rlc.defaultHeading.map((val) => (
                <TableCell key={val}>
                  <Typography variant="h5">{val}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rlc.defaultlistData.map((obj, i) => (
              <TableRow key={i}>
                <TableCell>{obj.role}</TableCell>
                <TableCell>{obj.description}</TableCell>
                <TableCell>
                  {actionBtn && (
                    <IconButton onClick={(e) => rlc.handleActionBtnClick(e, i)}>
                      {actionBtn ? actionBtn : <MoreVertIcon />}
                    </IconButton>
                  )}
                  <Menu
                    id={`basic-menu-${i}`}
                    anchorEl={rlc.anchorEl}
                    open={rlc.open === i}
                    onClose={rlc.handleActionBtnClose}
                    MenuListProps={{
                      "aria-labelledby": `basic-button-${i}`
                    }}
                    PaperProps={{
                      sx: { boxShadow: "0px 0px 3px rgba(0,0,0,0.2)" }
                    }}>
                    {actionsMenu.map(
                      (actionobj, aidx) =>
                        actionobj?.label && (
                          <MenuItem
                            key={aidx}
                            onClick={() => {
                              rlc.handleActionBtnClose()
                              actionobj.handleClick(obj)
                            }}>
                            {actionobj?.label}
                          </MenuItem>
                        )
                    )}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
            {rlc.defaultlistData.length === 0 && (
              <TableRow>
                <TableCell colSpan={rlc.defaultHeading.length}>
                  <Typography textAlign="center">No Data Available</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default RolesListing
