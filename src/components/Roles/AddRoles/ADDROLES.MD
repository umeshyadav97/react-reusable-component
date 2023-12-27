## Create Roles with Permissions

#### Core components of the RolesComponent

- Core
  - [AddRolesComponent](/src/components/Roles/AddRoles/index.jsx)
  - [Controller](/src/components/Roles/AddRoles/addRoles.controller.js)

### Basic Setup

Call RolesComponent With some Mandetory Props as shown below

```jsx
<RolesComponent
  modules={["dashboard", "subadmin", "user", "setting"]}
  handleSave={(val) => console.log(val)}
  groupedPermission={false}
/>
```

### Props Detail

| Props             | Mandatory | Type             | # Description                                                                              |
| ----------------- | --------- | ---------------- | ------------------------------------------------------------------------------------------ |
| modules           | **Yes**   | Array of Strings | Put all modules name into array as a string                                                |
| handleSave        | **Yes**   | function         | Thorough which we can get schema of our role and it's permission                           |
| groupedPermission | **No**    | boolean          | This will deselect all checkbox of a row if you de-select the view section in the same row |
| setDefaultData    | **No**    | object           | object structure is below                                                                  |

### setDefault prop Object Structure

```json
{
  "id": "2023-04-28T12:09:43.629Z",
  "role": "trail 10",
  "description": "trail description 10",
  "permission": {
    "Dahboard": {
      "view": true,
      "create": true,
      "update": true,
      "delete": false
    },
    "Users": {
      "view": true,
      "create": true,
      "update": true,
      "delete": true
    },
    "Sub Admins": {
      "view": true,
      "create": true,
      "update": true,
      "delete": true
    },
    "Roles": {
      "view": true,
      "create": true,
      "update": true,
      "delete": true
    },
    "Settings": {
      "view": true,
      "create": true,
      "update": true,
      "delete": true
    }
  }
}
```

### Core Component Instructions

- [Controller](/src/components/Roles/AddRoles/addRoles.controller.js)

changes in array named keyarr will change the table heading of permission checkbox.
the string in array is not case sensitive

**Old**

```js
//Change in keyarr strings will change the Header of permisssion checkbox
const keyarr = ["view", "create", "update", "delete"]
```

| Modules | View | Create | Update | Delete |
| ------- | ---- | ------ | ------ | ------ |
| ------- | [x]  | [x]    | [x]    | [x]    |

**New**

```js
//Change in keyarr strings will change the Header of permisssion checkbox
const keyarr = ["Read", "Add", "Edit", "Remove"]
```

| Modules | Read | Add | Edit | Remove |
| ------- | ---- | --- | ---- | ------ |
| ------- | [x]  | [x] | [x]  | [x]    |
