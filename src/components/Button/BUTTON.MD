## Button

A reusable React component for Button.

# Usage:

```js
<Button variant="outlined" onClick={sc.handleClick} transParent minWidth="100px" />
```

# **_Basic Props_**

_*Mandetory Props*_

- variant (string):- You have to send outline for varient.
- onClick (function):- Callback fired when the value changes.
- minWidth (value) :- You have to send the width of button,

_*Optional Props*_

- transParent (string):- This will show the type of button as transparent.
- minHeight (value):- Set the height of the button.

_*For send icons*_

```js
<Button
  variant="outlined"
  onClick={dbc.handleOpen}
  mid
  transParent
  minWidth="100px"
  minHeight="48px">
  <img src={Download} />
</Button>
```
