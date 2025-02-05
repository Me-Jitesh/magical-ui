import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography
          variant="h3"
          color={darkMode ? 'secondary' : 'primary'}
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          Magical UI
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
