## :INFINITE SCROLL

#### Core components of the Infinite scroll Component

- Core
  - [Infinitescroll](/src/components/InfiniteScroll/index.jsx)

### Basic Setup

You can directly call the component with some necessary props

For Infinite scroll we can use below props

```jsx
<InfiniteScroll
  next // consist of method or function call
  hasMore // It is a type of bolean
  scrollThreshold
  scrollBy // its is scroll from top and bottom
  loader
/>
```

#### **_Basic Props_**

_*Mandetory Props*_

- next:- It is consist of function which the api call .
- hasMore:- It will a bolean value by default it is false when we load a next page it will be true.
- loader:- It will load the next page or show the loading of value.

```jsx
<InfoniteScroll
  next={() => fetchUserData({ pageNumber: state.pageNumabe + 1 })}
  hasMore={Math.ceil(totalCount / state.pageSize) > state.pageNumber}
  loader={<div>Loading.....</div>}
/>
```

_*Optional Props*_

- scrollThreshold:- It will show the maximun page number that are in the list.
- scrollBy :- It will scroll from top to bottom or bottom to top.

_*Props*_

```jsx
Name                            Type            Default                                                     Description

next                            func             () => fetchUserData({ pageNumber: state.pageNumabe + 1 })   Method Takes
                                                                                                             to load the new page


hasMore                          bol             false                                                      it will true when page
                                                                                                            get loaded



loader                        any              null                                                       Takes null


scrollBy                      object           {"bottom"}                                                 Takes Top and bottom


scrollThreshold               number           0

```
