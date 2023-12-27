## :MultiSelect Chip

#### Core components of the drop down Component

- Core
  - [MultiSelectchip](/src/components/Multiselectchip/index.jsx)
  - [Controller](/src/components/Multiselectchip/multiselectchip.controller.js)

### Basic Setup

You can directly call the component with some necessary props

For Multiple select we can use below snippet

```jsx
<MultiSelectchip names={names} 
initialSelected={initialSelected} 
chipsView={false}
 />
```



It needs names ,initialSelected ,chipsView.
names will have options that you want to show,
initail selected is used in case you would like some options to be pre selected
it has chipsView keyword that will will be initially true and that emphasis that the selected options will be shown in chips view below the multiselect component.
If you pass it false the div containing particular div will not appear.

you can customize it for further needs according to the project requirements.
You have controller in which all the specific functions will be defined and view will have only 
presentive elements.

