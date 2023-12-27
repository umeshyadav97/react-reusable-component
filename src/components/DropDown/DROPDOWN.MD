## :Drop Down

#### Core components of the drop down Component

- Core
  - [DropDown](/src/components/DropDown/index.jsx)
  - [Controller](/src/components/DropDown/dropdown.controller.js)

### Basic Setup

You can directly call the component with some necessary props

For Multiple select we can use below snippet

```jsx
<DropDown
  clearBtn
  hasSearchBar
  multiSelect
  withCheckBox
  placeHolder={"placeholder"}
  options={[
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" }
  ]}
  selectedItem={["male"]}
  handleChange={(val) => console.log(val)}
  helperText="HelperText Here "
/>
```

For Single select we can use below below snippet

```jsx
<DropDown
  clearBtn
  placeHolder={"placeholder"}
  options={[
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" }
  ]}
  selectedItem={["male"]}
  handleChange={(val) => console.log(val)}
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- options:- It is a array of object containing three key id,label,value.
- selectedItem:- It will show the pre-selected option it is array of String **_(it could have multile string if it is multiselect )_**
- handleChange:- It is a function where we can get selected value.
- multiSelect :- It will allow you to select multiple option

```jsx
<DropDown
  options={[
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" }
  ]}
  selectedItem={["male"]}
  handleChange={(val) => console.log(val)}
/>
```

```jsx
<DropDown
  multiSelect
  options={[
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" }
  ]}
  selectedItem={["male"]}
  handleChange={(val) => console.log(val)}
/>
```

_*Optional Props*_

- clearBtn:- It will add clear button which can clear the selected options.
- hasSearchBar :- It will add search bar in drop down through which we can search the options avialble in it.
- withCheckBox:- It will checkbox in front of options to track the selected item
- placeHolder:- It is a string will show when no options are selected.
- helperText:- It is a string will show some intructions.
- MenuPaperProps :- It can send Props to Menu Paper for custom styling
- FormControlProps:- It can adjust width of compoenent and style accordingly by passing props to FormControl. It is a Top level Wrapper.
- optionsBoxProps :- It will allow you to style options warpper box accordingly.

```jsx
<DropDown
  clearBtn
  hasSearchBar
  withCheckBox
  placeHolder={"placeholder"}
  helperText="HelperText Here"
  multiSelect
  options={[
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" }
  ]}
  selectedItem={["male"]}
  handleChange={(val) => console.log(val)}
  MenuPaperProps={{ sx: { width: 360, boxShadow: "0px 0px 3px rgba(0,0,0,0.2)" } }}
  FormControlProps={{ fullWidth: true, sx: { m: 2 } }}
  optionsBoxProps={{ sx: { maxHeight: 200, overflowY: "auto" } }}
/>
```
