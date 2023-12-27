import React from "react"
import { useCompoenentGuideController } from "./componentGuide.controller"
import { Box } from "@mui/material"
import DropDown from "components/DropDown"

const ComponentGuide = () => {
  const cgc = useCompoenentGuideController()

  return (
    <>
      <Box width={360}>
        <DropDown
          clearBtn
          hasSearchBar
          multiSelect
          withCheckBox
          placeHolder={cgc.dropDownData.data1.label}
          options={cgc.dropDownData.data1.options}
          selectedItem={cgc.mutipleSelect1}
          handleChange={(val) => cgc.setMultipleSelect1(val)}
          helperText="HelperText Here "
          MenuPaperProps={{ sx: { width: 360, boxShadow: "0px 0px 3px rgba(0,0,0,0.2)" } }}
          FormControlProps={{ fullWidth: true, sx: { m: 2 } }}
          optionsBoxProps={{ sx: { maxHeight: 200, overflowY: "auto" } }}
        />

        <DropDown
          clearBtn
          placeHolder={cgc.dropDownData.data2.label}
          options={cgc.dropDownData.data2.options}
          selectedItem={cgc.selectedItem1}
          handleChange={cgc.setSelectedItem1}
          MenuPaperProps={{ sx: { width: 360, boxShadow: "0px 0px 3px rgba(0,0,0,0.2)" } }}
          FormControlProps={{ fullWidth: true, sx: { m: 2 } }}
        />
      </Box>
    </>
  )
}

export default ComponentGuide
