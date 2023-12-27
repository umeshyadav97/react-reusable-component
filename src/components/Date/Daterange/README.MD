## Date Range Picker Component

The Date Range Picker Component is a React component that allows users to select a range of dates.

# Usage:

To use the BasicDateRange in your React app, import it and place it in your JSX

```jsx
<BasicDateRange
  startDate={sc.startDate}
  endDate={sc.endDate}
  focusedInput={sc.focusedInput}
  handleDatesChange={sc.handleDatesChange}
  handleFocusChange={sc.handleFocusChange}
  minDate={new Date(sc.today.getFullYear(), sc.today.getMonth(), 1)}
  maxDate={new Date(sc.today.getFullYear(), sc.today.getMonth() + 2, 0)}
/>
```

# **_Basic Props_**

The BasicDateRange accepts the following props:

_*Mandetory Props*_

- startDate: (Date) The currently selected start date.
- endDate: (Date) The currently selected end date.
- handleDatesChange: (function) A callback function that is called when the user selects a new range of dates. It is passed an object with startDate and endDate properties.
- focusedInput: (string) The currently focused input field ('startDate' or 'endDate').
- handleFocusChange: (function) A callback function that is called when the user focuses or unfocuses one of the input fields. It is passed a string with the name of the focused input field ('startDate' or 'endDate').

_*Optional Props*_

- startDateId: (string) A unique ID for the start date input.
- endDateId: (string) A unique ID for the end date input.
- minimumNights: (number) The minimum number of nights required in the range. Defaults to 0.
- startDatePlaceholderText: (string) Placeholder for input field. Defaults = "Start Date",
- endDatePlaceholderText: (string) Placeholder for input field. Defaults = "End Date",
- minDate: (Date) Minimal selectable date, Defaults = null.
- maxDate: (Date) Maximal selectable date, Defaults = null.
