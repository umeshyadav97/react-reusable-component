import React from "react"
import styles from "./multiSelectchip.module.scss"

import { MenuItem, FormControl, ListItemText, Select, Checkbox, Chip } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useMultiChipController } from "./multiselect.controller"

const MultiSelectchip = (props) => {
  const { names } = props
  const msc = useMultiChipController(props)

  return (
    <>
      <div>
        <FormControl className={styles.main}>
          <Select
            labelId="mutiple-chip-checkbox"
            id="mutiple-chip-checkbox"
            multiple
            value={msc.personName}
            onChange={msc.handleChange}
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {
              if (selected.length > 0) {
                if (selected.length === 1) {
                  return selected[0]
                } else {
                  return (
                    <span>
                      {selected[0]} <span>(+ {selected?.length - 1} more)</span>
                    </span>
                  )
                }
              }
            }}>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={msc.personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {msc.selectedValue && (
        <div className={styles.chipside}>
          {msc.personName.map((value) => (
            <Chip
              key={value}
              label={value}
              clickable
              onDelete={(e) => msc.handleDelete(e, value)}
              onClick={(e) => msc.handleDelete(e, value)}
              className={styles.multiselectchip}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default MultiSelectchip
