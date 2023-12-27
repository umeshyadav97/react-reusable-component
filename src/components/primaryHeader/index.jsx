import MenuIcon from "@mui/icons-material/Menu"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import PropTypes from "prop-types"
import * as React from "react"
import { useDrawerController } from "./drawer.controller"
import { useDrawerModel } from "./drawer.model"

function PrimaryHeader(props) {
  const dc = useDrawerController(props)
  const drawerModel = useDrawerModel()

  const drawer = (
    <Box onClick={dc.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {drawerModel.navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = dc.window !== undefined ? () => window().document.body : undefined

  return (
    <Grid container sx={{ display: "flex" }}>
      <CssBaseline />
      <Grid container component="nav" style={{ background: "#c6361c" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={dc.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#fff", display: { sm: "block" } }}>
            {props.title}
          </Typography>
        </Toolbar>
      </Grid>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={dc.mobileOpen}
          onClose={dc.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerModel.drawerWidth }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  )
}

PrimaryHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default PrimaryHeader
