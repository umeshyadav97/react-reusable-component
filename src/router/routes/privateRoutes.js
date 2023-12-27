// Export all the private routes
import AddRoles from "pages/private/role/AddRoles"
import React from "react"

const Dashboard = React.lazy(() => import("pages/private/dashboard"))
const Settings = React.lazy(() => import("pages/private/settings"))
const SubAdmins = React.lazy(() => import("pages/private/sub-admins"))
const Users = React.lazy(() => import("pages/private/users"))
const Roles = React.lazy(() => import("pages/private/role"))

export const PrivateRoutes = [
  { path: "/u/dashboard", exact: true, component: Dashboard },
  { path: "/u/users", exact: true, component: Users },
  { path: "/u/roles", exact: true, component: Roles },
  { path: "/u/roles/add", exact: true, component: AddRoles },
  { path: "/u/roles/edit/:id", exact: true, component: AddRoles },
  { path: "/u/sub-admins", exact: true, component: SubAdmins },
  { path: "/u/settings", exact: true, component: Settings }
]
