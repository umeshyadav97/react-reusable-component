## Date Time Picker

A reusable React component to select time & date.

# Usage:

```js
<BasicDatePicker
  label="Basic example"
  value={sc.value}
  onChange={sc.handleOnChange}
  disabled={false}
  disableFuture={false}
  disablePast={false}
  openTo="day"
/>
```

# **_Basic Props_**

_*Mandetory Props*_

- value (string):- The selected value. Used when the component is controlled.
- onChange (function):- Callback fired when the value changes.

_*Optional Props*_

- label (string):- The label content. Default:"Basic example".
- disable (boolean):- If true, the picker and text field are disabled. Default: false.
- disableFuture (boolean):- If true, disable values after the current date & time for date time components. Default: false.
- disablePast (boolean):- If true, disable values before the current date & time for date time components. Default: false.
- openTo (string):- The default visible view. Type: 'year'|'day'|'hours'|'minutes'
- maxDate (any):-Maximal selectable date.
- minDate (any):- Minimal selectable date.
