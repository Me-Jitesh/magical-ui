import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import IPGeoLocation from "./IPGeoLocation";

const Navbar: React.FC<{ toggleTheme: () => void; darkMode: boolean }> = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Magical UI ✨
        </Typography>

        <IPGeoLocation />

        <Switch checked={darkMode} onChange={toggleTheme} color="secondary" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
