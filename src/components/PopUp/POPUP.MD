## :Pop Up

#### Core components of the Pop-up

- Core
  - [PopUp](/src/components/PopUp/index.jsx)

### Basic Setup

You can directly call the component with some necessary props

#### **_Basic Props_**

_*Mandetory Props*_

- title:- It is a header of pop-up.
- variant:- It is type of pop-up i.e. Warning, Error, Delete, Success & Form,
- description:- If variant type is not Form then you need a description for an action,
- component:- If your variant type is Form then you have to pass a component to display in pop-up,
- handleSubmit:- To perform an action,

```jsx
<PopUp
  handleSubmit={"handleSubmit"}
  variant="Form"
  title="Form"
  description="Are you sure ......?"
  component={"Component"}
/>
```

_*Optional Props*_

- isAction:- It is a flag to show/hide action buttons,
- ButtonVariant:- It is style for action buttons,
- ButtonColor:- It can change color of action buttons,
- proceedButton:- It can change text of proceed button,
- cancelButton:- It can change text of cancel button,

```jsx
<PopUp
  open="true"
  handleClose="false"
  handleSubmit={"handleSubmit"}
  variant="Warning"
  title="Warning"
  description="Are you sure ......?"
  isAction={true}
  ButtonVariant="contained"
  ButtonColor="secondary"
  proceedButton="Confirm"
  cancelButton="Cancel"
  component={"<ComponentGuide />"}
/>
```
