## Roles Listing with Add Edit

#### Core components of the RolesComponent

- Core
  - [RolesListing](/src/components/Roles/RolesListing/index.jsx)
  - [Controller](/src/components/Roles/RolesListing/rolesListing.controller.js)

### Basic Setup

How to call Component

```jsx
<RolesListing
  tableHeading={["Roles", "Description", "Actions"]}
  listData={[
    {
      id: "2023-04-28T12:09:43.629Z",
      role: "trail 10",
      description: "trail description 10"
    }
  ]}
  actionBtn={<MoreVertIcon />}
  actionsMenu={[
    {
      label: "Edit",
      handleClick: rc.handleEditRole
    },
    {
      label: "Delete",
      handleClick: rc.handleDeleteRole
    }
  ]}
/>
```

### Props

| Props        | Mandatory | Description                                                                                                                                            |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tableHeading | **No**    | It is a Array containing strings of heading name ex:-["Roles", "Description", "Actions"]. This prop is not mandatory use when you want custom heading. |
| listData     | **Yes**   | It is a Array of object with some madetory key                                                                                                         |
| actionBtn    | **No**    | It is a optional Prop and takes compoent, you can change the action button accordingly.                                                                |
| actionsMenu  | **Yes**   | It is a Array of object with key label and handleclick , with the help of this we can edit and delete role by defining function in handleclick.        |

- **tableHeading** (optional):- It is a Array containing strings of heading name ex:-["Roles", "Description", "Actions"]. This prop is not mandatory use when you want custom heading.
- **listData** (mandatory):- It is a Array of object with some madetory key ex:- [
  {
  id: "2023-04-28T12:09:43.629Z",
  role: "trail 10",
  description: "trail description 10"
  }
  ]. here id,role and description are mandatory.

- **actionBtn** (optional):- It is a optional Prop and takes compoent, you can change the action button accordingly.
- **actionsMenu** (mandatory):- It is a Array of object with key label and handleclick , with the help of this we can edit and delete role by defining function in handleclick.
