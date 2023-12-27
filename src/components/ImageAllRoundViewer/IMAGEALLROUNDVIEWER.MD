## :360 Degree Image Viewer

#### Core components of the 360 Degree Image View Component

- Core
  - [360DegreeImageViewer](/src/components/ImageAllRoundViewer/index.jsx)
  - [Controller](/src/components/ImageAllRoundViewer/imageallround.controller.js)
  - [Model](/src/components/ImageAllRoundViewer/imageallround.model.js)

### Basic Setup

You can directly call the component with some necessary props

For 360 Degree Image Viewer we can use below snippet

```jsx
<ImageAllRoundViewer
  click={}
  config={}
  viewerStyle={}
  imageSource="https://images.unsplash.com/photo-1548106647-408d4739a0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80"
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- config:- Here we can set the config of pennellum.
- imageSource:- We can set the image to view at 360 degree angle.

_*Optional Props*_

- click:- It is a click event which shows available configuration of pennellum.
- viewerStyle:- It can set customise style.
