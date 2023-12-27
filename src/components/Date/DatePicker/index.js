import * as React from "react"
import { Dayjs } from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"

export default function BasicDatePicker({
  label = "Basic example",
  value = Dayjs,
  onChange,
  disabled,
  disableFuture = false,
  disablePast = false,
  maxDate,
  minDate,
  openTo = "day"
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          onChange(newValue)
        }}
        openTo={openTo}
        disabled={disabled}
        disableFuture={disableFuture}
        disablePast={disablePast}
        maxDate={maxDate}
        minDate={minDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
