import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color='transparent'>
            <Toolbar>
                <Typography variant="h3" color="secondary" sx={{ flexGrow: 1 }}>
                    Magical UI
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
