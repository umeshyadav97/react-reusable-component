## Create Roles with Permissions

#### Core components of the RolesComponent

- Core
  - [RBAC](/src/components/RBAC/index.jsx)
  - [Controller](/src/components/RBAC/rbac.controller.js)
  - [WithPermission](/src/components/RBAC/permissionHoc/index.jsx)

### Basic Setup

There is Two main Component

1. RBAC :- It is a warpper with some props
2. WithPermission :- It is a wrapper and function you can use accordingly.

## Step :- 1 [RBAC](/src/components/RBAC/index.jsx)

Wrap your Main Compoent with RABC it is a context provider , it will give permission through out the app

```jsx
<RBAC
  modules={[
    { title: "Dashboard", route: "/u/dashboard" },
    { title: "User", route: "/u/user" }
  ]}
  role={"ADMIN"}>
  <Routes>
    <Route path="/" element={<Navigate to="/u/dashboard" replace />} />
    {/* All the public routes */}
    {PublicRoutes.map(({ component: Component, ...route }) => (
      <Route key={`Route-${route.path}`} element={<PublicLayout />}>
        <Route
          path={route.path}
          element={
            isLoggedIn === true ? <Navigate to="/u/dashboard" replace={true} /> : <Component />
          }
        />
      </Route>
    ))}

    {/* All the private routes */}
    {PrivateRoutes.map(({ component: Component, ...route }) => (
      <Route key={`Route-${route.path}`} element={<PrivateLayout isLoggedIn={isLoggedIn} />}>
        <Route
          path={route.path}
          element={
            isLoggedIn !== true ? <Navigate to="/auth/login" replace={true} /> : <Component />
          }
        />
      </Route>
    ))}

    {/* 404 page route */}
    <Route exact path="*" element={<Error404 />} />
  </Routes>
</RBAC>
```

here two props are needed by RABC Wrapper

**1. modules (Required) : - This is a Array of objects this object will contain two key value pair**

1. title:- It is a string should match with the Sidebar menu title.
2. route :- It is a string contain path for routing.

```json

  "modules": [
    { "title": "Dashboard", "route": "/u/dashboard" },
    { "title": "User", "route": "/u/user" }
  ]

```

**2. role (Required) : - It is a string should match with the role created by role module**

```json
  "role": "ADMIN"
```

## Usage

```jsx
<RBAC modules={[
    { "title": "Dashboard", "route": "/u/dashboard" },
    { "title": "User", "route": "/u/user" }
  ]} role={"ADMIN"}>
```

## Step :- 2 [WithPermission](/src/components/RBAC/permissionHoc/index.jsx)

It is a wrapper as well as function this will check the permission for component wrapped into it acoordingly and return null or children based on permssion provided as a prop and and if we use it as a function it will return null or true based on permission provided as a prop.

- props:- There is a two props required in this.

  | Prop       | Required | Description                                                                                                                                                                                                                                                                                           |
  | ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | module     | **Yes**  | It is string with module name should match with side menu title                                                                                                                                                                                                                                       |
  | permission | **Yes**  | It is string or array depending upon the requirement ,it dependes upon permission data. ex:- "create", ["update", "view","delete"] **note** :-here in array if both the permission update and delete are true or one of the permission either update or delete is true, it will return true else null |

  here the permission by default "create", "update", "view","delete".
  this permission could change depeneds upon permission data
  for exaple:-

  ```json
  {
    "id": "2023-05-01T10:59:25.709Z",
    "role": "ADMIN",
    "description": "This is Admin with full permissions.",
    "permission": {
      "Dashboard": {
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

  If given permission data should look like

  ```json
  {
    "id": "2023-05-01T10:59:25.709Z",
    "role": "ADMIN",
    "description": "This is Admin with full permissions.",
    "permission": {
      "Dashboard": {
        "retrive": true,
        "add": true,
        "edit": true,
        "remove": true
      },
      "Roles": {
        "retrive": true,
        "add": true,
        "edit": true,
        "remove": true
      },
      "Settings": {
        "retrive": true,
        "add": true,
        "edit": true,
        "remove": true
      }
    }
  }
  ```

  Then permission prop should be "retrive","add","edit","remove".

  | Prop       | Required | Description                                                                                                                                                                                                                                                                                      |
  | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | permission | **Yes**  | It is string or array depending upon the requirment ,it dependes upon permission data .ex:- "retrive",["add","edit","remove"] **note** :-here in array if both the permission update and delete are true or one of the permission either update or delete is true, it will return true else null |

## Usage : 1 (as a Wrapper)

In this Role module if there is a create permisssion the wrapper will allow this button to render in UI else it will not allow button to render.

```jsx
// snippet of Role module
<WithPermission module={"Role"} permission={"create"}>
  <Box m={2} mr={0}>
    <Button variant="contained" size="large" onClick={() => rc.handleNavigation("/u/roles/add")}>
      Add Roles +
    </Button>
  </Box>
</WithPermission>
```

## Usage : 1 (as a function)

It takes object as a argument with two key value pair

1. module:- It is a string with module name ex:- "Role"
2. permission :- It is a string or array depending upon the single and multiple permission. if multiple permission then **note** :-here in array if both the permission update and delete are true or one of the permission either update or delete is true, it will return true else null

```js
// permission as a Array
WithPermission({ module: "Role", permission: ["update", "delete"] })
/*
  here in array if both the permission update and delete are true or one of the permission either update or delete is true,  it will return true
  else null
*/

// permission as a String
WithPermission({ module: rc.module, permission: "update" })
```

## UseCase

```jsx
<RolesListing
  tableHeading={["Roles", "Description", "Actions"]}
  listData={rc.listData}
  actionBtn={
    WithPermission({ module: rc.module, permission: ["update", "delete"] }) ? (
      <MoreVertIcon />
    ) : null
  }
  actionsMenu={[
    WithPermission({ module: rc.module, permission: "update" }) && {
      label: "Edit",
      handleClick: rc.handleEditRole
    },
    WithPermission({ module: rc.module, permission: "delete" }) && {
      label: "Delete",
      handleClick: rc.handleDeleteRole
    }
  ]}
/>
```

```json
actionBtn={
    WithPermission({ module: rc.module, permission: ["update", "delete"] }) ? (
      <MoreVertIcon />
    ) : null
  }
```

- In above snippet in actionbtn prop we use permission as an array to check both the permission if either of them are true or both of them are true it will render action button.

```json
actionsMenu={[
    WithPermission({ module: rc.module, permission: "update" }) && {
      label: "Edit",
      handleClick: rc.handleEditRole
    },
    WithPermission({ module: rc.module, permission: "delete" }) && {
      label: "Delete",
      handleClick: rc.handleDeleteRole
    }
  ]}
```

- In above snippet we pass permission as a string to check if there is permission it will return true else will return null
