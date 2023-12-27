## :Accordion

#### Core components of the accordion Component

- Core
  - [Accordion](/src/components/Accordion/index.jsx)
  - [Controller](/src/components/Accordion/accordion.controller.js)
  - [Model](/src/components/Accordion/accordion.model.js)

### Basic Setup

You can directly call the component with some necessary props

For accordion we can use below snippet

```jsx
<Accordions
  options=[
    {
      id: 0,
      ques: "Lorem Ipsum is simply dummy  ",
      ans: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      id: 1,
      ques: "Lorem Ipsum is simply dummy text",
      ans: "Lorem Ipsum is simply dummy text of the printing"
    },
  ]
  accordionDetails={}
  handleChange={(val) => console.log(val)}
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- options:- It is a array of object containing three key id,ques,ans.
- accordionDetails:- object of all the data passed from the parent component as a prop
- handleChange:- It is a function where we can get selected value.
