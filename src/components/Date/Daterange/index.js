import React from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker } from "react-dates"
import "./DateRangePicker.css"

function BasicDateRange({
  startDate,
  endDate,
  focusedInput,
  handleDatesChange,
  handleFocusChange,
  minimumNights = 0,
  startDatePlaceholderText = "Start Date",
  endDatePlaceholderText = "End Date",
  minDate = null,
  maxDate = null
}) {
  return (
    <div className="date-range-picker">
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
        minimumNights={minimumNights}
        startDatePlaceholderText={startDatePlaceholderText}
        endDatePlaceholderText={endDatePlaceholderText}
        isOutsideRange={(day) => day.isBefore(minDate) || day.isAfter(maxDate)}
      />
    </div>
  )
}

export default BasicDateRange
