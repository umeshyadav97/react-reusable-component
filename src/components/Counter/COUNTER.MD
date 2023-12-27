## :Counter

#### Core components of the counter Component

- Core
  - [Counter](/src/components/Counter/index.jsx)
  - [Controller](/src/components/Counter/counter.controller.js)
  - [Model](/src/components/Counter/counter.model.js)

### Basic Setup

You can directly call the component with some necessary props

For counter we can use below snippet

```jsx
<Counter
  counterOn={}
  setCounterOn={}
  countData=[]
/>
```

For counter with image background use below snippet

```jsx
<Counter
  counterOn={}
  setCounterOn={}
  countData=[]
  backgroundImage
  imageUrl="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg"
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- countData:- It is an array of object
- counterOn:- it is a state
- setCounterOn:- it is setting counter to be true on scroll.

_*Optional Props*_

- backgroundImage:- It is optional prop for setting background image
- imageUrl:- we can send background url.
