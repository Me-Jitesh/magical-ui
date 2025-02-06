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

        <Typography variant="h6" sx={{ flex: 1, py: 2, fontWeight: 800 }}>
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

        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          <IPGeoLocation />
        </Box>


        <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
          <IconButton onClick={toggleTheme} color="secondary">
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>

        <Box>
          <AskAI />
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 200 }}>

          <List>
            <ListItem>
              <IPGeoLocation />
            </ListItem>
            <ListItem onClick={toggleTheme} component="li">
              <ListItemText primary={darkMode ? "Dark" : "Light"} />
              {darkMode ? < DarkModeIcon /> : <LightModeIcon />}
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)} component="li">
              <ListItemText primary="Close" /> <CloseIcon />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
