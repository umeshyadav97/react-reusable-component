// Export all routes that should be in the side menu
import React from "react"
import HomeIcon from "@mui/icons-material/Dashboard"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import GroupIcon from "@mui/icons-material/Group"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import AddTaskIcon from "@mui/icons-material/AddTask"

class MenuPath {
  constructor(title, icon, route, alias = null) {
    this.title = title
    this.icon = icon
    this.route = route
    this.alias = alias || title.replace(" ", "_").toLowerCase()
  }
}

export const DashboardMenus = [
  new MenuPath("Dashboard", <HomeIcon />, "/u/dashboard"),
  new MenuPath("Users", <GroupIcon />, "/u/users"),
  new MenuPath("Sub Admins", <AdminPanelSettingsIcon />, "/u/sub-admins"),
  new MenuPath("Roles", <AddTaskIcon />, "/u/roles"),
  new MenuPath("Settings", <SettingsSuggestIcon />, "/u/settings")
]
