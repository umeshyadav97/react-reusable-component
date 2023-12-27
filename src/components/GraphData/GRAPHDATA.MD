## :Graph Data

#### Core components of the Graph Data

- Core
  - [GraphData](/src/components/GraphData/index.jsx)

### Basic Setup

You can directly call the component with some necessary props

#### **_Basic Props_**

_*Mandetory Props*_

- header:- It is a header of graph data.
- GraphData:- It is type of data that takes the value and show the in the graph,
- graphLabels:- It represent the value of x-axis,
- graphType:- It is represent the type of graph Line,Bar,Doughnut,

```jsx
<GraphCard
  header="Graph"
  Total={100}
  GraphData={dbc.graphData}
  graphLabels={Yearly}
  graphType={"Line"}
/>
```

_*Optional Props*_

- total:- It shows the total graph value,
- labels:- It can assign the labels of graph data,
- Onclick:- It can change to the details page if their ,

```jsx
<GraphCard
  header="Graph Data"
  Total={100}
  labels="Graph"
  GraphData={["3,2,6,4,7,8,9"]}
  onClick={"handleDetailsScreen()"}
  graphLabels={"graphLabels"}
/>
```
