import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Counter from './Counter';
import RichTextEditor from './RichTextEditor';
import UserDataForm from './UserDataForm';
import Profile from './Profile';
import Anime from './Anime';
export const Dashboard: React.FC = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 1 }}>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={12} md={12}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h3>FLUID ANIMATION</h3>
              <Anime />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h3>COUNTER </h3>
              <Counter />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h3>RICH TEXT EDITOR</h3>
              <RichTextEditor />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h3>USER DATA FORM </h3>
              <UserDataForm />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ padding: 1, height: '100%' }}>
              <h3>USER DATA</h3>
              <Profile />
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};
export default Dashboard; 