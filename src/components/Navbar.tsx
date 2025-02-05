import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IPGeoLocation from "./IPGeoLocation";
import AskAI from "./AskAI";

const Navbar: React.FC<{ toggleTheme: () => void; darkMode: boolean }> = ({
  toggleTheme,
  darkMode,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <Typography variant="h6" color="primary" sx={{ flex: 1, py: 2, fontWeight: 700 }}>
          Magical UI ✨
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* IPGeoLocation Component for Larger Screens */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          <IPGeoLocation />
        </Box>

        {/* Dark Mode Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
          <IconButton onClick={toggleTheme} color="primary">
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>

        {/* AskAI Component */}
        <AskAI />
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250 }}>
          {/* Close Drawer Button */}
          <IconButton onClick={() => setOpenDrawer(false)} sx={{ position: "absolute", top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem onClick={() => setOpenDrawer(false)} component="li">
              <ListItemText primary="Close" />
            </ListItem>
            <ListItem onClick={toggleTheme} component="li">
              <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
            </ListItem>
            <ListItem>
              <IPGeoLocation />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
