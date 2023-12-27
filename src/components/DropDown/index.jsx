import React from "react"
import { useDropDownController } from "./dropdown.controller"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

const DropDown = (props) => {
  const { selectedItem, MenuPaperProps, FormControlProps, optionsBoxProps } = props
  const ddc = useDropDownController(props)
  return (
    <>
      <FormControl {...FormControlProps}>
        <Stack
          id="basic-button"
          direction="row"
          onClick={ddc.handleClick}
          sx={{
            p: 2,
            border: (t) => `1px solid ${ddc.open ? t.palette.primary.main : t.palette.text.gray}`,
            borderRadius: 1
          }}>
          <Box sx={{ width: "calc(100% - 25px)" }}>
            {selectedItem.length > 0 ? (
              <Typography noWrap>{ddc.renderValue(selectedItem)}</Typography>
            ) : (
              <Typography fontSize={16} sx={{ color: (t) => `${t.palette.text.darkgray}` }} noWrap>
                {props.placeHolder}
              </Typography>
            )}
          </Box>
          <Box sx={{ pl: 0.5 }}>
            {ddc.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
        </Stack>

        <Menu
          id="basic-menu"
          anchorEl={ddc.anchorEl}
          open={ddc.open}
          onClose={ddc.handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
          PaperProps={{
            ...MenuPaperProps
          }}>
          {/*---- Searchbar ----*/}
          {props?.hasSearchBar && (
            <Box sx={{ p: 1 }}>
              <TextField
                fullWidth
                id="searchBox"
                placeholder="Search"
                type="search"
                value={ddc.defaultSearch}
                onChange={ddc.handleDefaultSearch}
              />
            </Box>
          )}

          {/*---- Options to Select ----*/}
          <Box {...optionsBoxProps}>
            {ddc.defaultOptions.map((obj, i) => (
              <MenuItem key={i} value={obj?.value} onClick={() => ddc.defaultHandleChange(obj)}>
                {props?.multiSelect && props?.withCheckBox ? (
                  <>
                    <Checkbox checked={selectedItem?.indexOf(obj?.value) > -1} />
                    <ListItemText primary={obj?.label} />
                  </>
                ) : (
                  obj?.label
                )}
              </MenuItem>
            ))}
            {ddc.defaultOptions?.length === 0 && (
              <Typography textAlign="center">No option available</Typography>
            )}
          </Box>

          {/*---- clear Button ----*/}
          {props?.clearBtn && (
            <Stack alignItems="flex-end">
              <Button onClick={ddc.handleClearSelectedItem}>Clear</Button>
            </Stack>
          )}
        </Menu>
        {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
      </FormControl>
    </>
  )
}

export default DropDown
