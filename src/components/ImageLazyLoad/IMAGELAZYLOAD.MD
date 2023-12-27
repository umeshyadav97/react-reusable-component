## :Image Lazy Load

#### Core components of the Image Lazy Load

- Core
  - [ImageLazyLoad](/src/components/ImageLazyLoad/index.jsx)

### Basic Setup

You can directly call the component with some necessary props

#### **_Basic Props_**

_*Mandetory Props*_

- key:- key we have to set id.
- alt:- It is type of string,
- effect:- It show the opacity or effect of the image it is either blur or black and white and opacity,
- src:- We have to set the img url to src,
- width:- We have to set the width of the image,
- height:- We have to set the height of the image,
- threshold:-Threshold in pixels. So the image starts loading before it appears in the viewport.,

```jsx
<LazyLoadImage
  key={item.id}
  alt={item.alt}
  effect="blur"
  src={item.image}
  threshold={100}
  width="100%"
  height="100%"
/>
```

_*Optional Props*_

- scrollPosition:- Object containing x and y with the curent window scroll position. Required,
- beforeLoad:- Function called right before the placeholder is replaced with the image element,
- delayTime:- Time in ms sent to the delayMethod ,

```jsx
<LazyLoadImage
  key={item.id}
  alt={item.alt}
  effect="blur"
  src={item.image}
  threshold={100}
  width="100%"
  height="100%"
  scrollPosition={scrollPosition}
/>
```
