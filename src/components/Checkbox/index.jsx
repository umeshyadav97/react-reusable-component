import React from "react"
import { Typography, FormGroup, FormControlLabel, Checkbox, Box } from "@mui/material"
import { useStyles } from "./styles"
const SingleCheckbox = (props) => {
  const { options, handleChange, multiSelect, selected, isAllSelected, boxSize } = props
  const styles = useStyles()

  return (
    <Box>
      {multiSelect ? (
        <Box>
          <div style={styles.checkboxContainer}>
            <div style={styles.innerContainer}>
              <Checkbox
                size={boxSize}
                value="all"
                onChange={handleChange}
                checked={isAllSelected}
              />
              <Typography variant="h6"> Select All</Typography>
            </div>
            {options.map((option, index) => (
              <div key={index} style={styles.innerContainer}>
                <Checkbox
                  size={boxSize}
                  value={option}
                  onChange={handleChange}
                  checked={selected.includes(option)}
                />
                <Typography variant="h6">{option}</Typography>
              </div>
            ))}
          </div>
        </Box>
      ) : (
        <Box>
          {options.map((data) => (
            <FormGroup key={data.id}>
              <FormControlLabel
                value="type"
                control={
                  <Checkbox size={boxSize} onChange={(event) => handleChange(event, data?.name)} />
                }
                label={<Typography variant="h6">{data?.name ? data?.name : ""}</Typography>}
              />
            </FormGroup>
          ))}
        </Box>
      )}
    </Box>
  )
}
export default SingleCheckbox
