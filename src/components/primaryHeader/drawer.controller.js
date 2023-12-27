import React from "react"

export const useDrawerController = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return {
    window,
    handleDrawerToggle,
    mobileOpen
  }
}
