import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Counter from './Counter';
import RichTextEditor from './RichTextEditor';
import UserDataForm from './UserDataForm';
import Profile from './Profile';
import Anime from './Anime';
import Navbar from './Navbar';
export const Dashboard: React.FC = () => {

  return (
    <>
      {/* <Box sx={{ padding: 0 }}> */}
        <Navbar />
      {/* </Box> */}

      <Box sx={{ flexGrow: 1, padding: 1 }}>

        <Grid container spacing={5}>

          <Grid item xs={12} sm={12} md={12}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h1>FLUID ANIMATION</h1>
              <Anime />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h1>COUNTER </h1>
              <Counter />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h1>RICH TEXT EDITOR</h1>
              <RichTextEditor />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h1>USER DATA FORM </h1>
              <UserDataForm />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h1>USER DATA</h1>
              <Profile />
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};
export default Dashboard; 