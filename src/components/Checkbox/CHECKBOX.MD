## :Checkbox

#### Core components of the checkbox Component

- Core
  - [Checkbox](/src/components/Checkbox/index.jsx)
  - [Controller](/src/components/Checkbox/checkbox.controller.js)
  - [Model](/src/components/Checkbox/checkbox.model.js)

### Basic Setup

You can directly call the component with some necessary props

For Select All we can use below snippet

```jsx
<SingleCheckbox
  options=[ "Selected Items1", "Selected Items2", "Selected Items3", "Selected Items4" ]
  handleChange={(val) => console.log(val)}
  isAllSelected
  multiSelect
  selected=[ "Selected items 1" ]
  boxSize="large"
/>
```

For Single checkbox we can use below below snippet

```jsx
<SingleCheckbox
  options=[
    {
      id: 0,
      name: "checkbox 1"
    },
    {
      id: 1,
      name: "checkbox 2"
    }
  ]
  handleChange={(val) => console.log(val)}
  boxSize="large"
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- options:- It is a array of object containing two key id,name.
- handleChange:- It is a function where we can get selected value.
- isAllSelected:- It is a boolean value which is true when all item in the array is selected.
- multiSelect:- It will allow you to check multiple option with select all checkbox
- selected:- It is a array of all the checked item.

_*Optional Props*_

- boxSize:- define size of the checkbox which include small, medium, large
