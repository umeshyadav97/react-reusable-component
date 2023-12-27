## :Slider

#### Core components of the slider corousal Component

- Core

  - [Slider](/src/components/SliderCorousal/index.jsx)
  - [Controller](/src/components/SliderCorousal/slider.controller.js)
  - [Model](/src/components/SliderCorousal/slider.model.js)

  ### Basic Setup

You can directly call the component with some necessary props

For Slider Corousal we can use below snippet

```jsx
<SliderCorousal
  dataSlider=[
    {
      id: 0,
      title: "Title 1",
      subTitle: "paragraph 1",
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
    },
    {
      id: 1,
      title: "Title 2",
      subTitle: "paragraph 2",
      img: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
    },

  ]
  prevSlide={}
  nextSlide={}
  moveDot={}
  slideIndex={}
  addDot
/>
```

For Autoplay Slider Corousal we can use below snippet

```jsx
<SliderCorousal
  images= [
    {
      id: 0,
      image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      title: "Title 1",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
      title: "Title 2",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },

  ]
  timeOut={}
  slideRight={}
  slideLeft={}
  setAutoPlay={}
  current={}
  setCurrent={}
  autoPlay
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- dataSlider:- It is a array of object containing 4 key id, title, subtitle, img.
- prevSlide:- Function to go to previous slide.
- nextSlide:- Function to go to next slide.
- moveDot:- Function to move the dot on change
- slideIndex:- Index at which the slider stops on change
- images:- It is a array of object containing 4 key id, title, subtitle, img.
- slideRight:- Function to go to next slide
- slideLeft:- Function to go to previous slide
- setAutoPlay:- It is a state to control autoplay of slider
- current:- It is a index of the current slide
- setCurrent: It is a state that set the index of current slide

_*Optional Props*_

- showDot:- to show sliding dot at the bottom of corousal
- showArrow:- to show arrow on left and right of the corousal
- autoPlay: It is a prop to display autoplay slider
