import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { Router, Routes, Route } from 'react-router-dom';
import User from './components/User';


const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem' }}>

        <Box>
          <Counter />
        </Box>

        <Box>
          <RichTextEditor />
        </Box>
      </Box>
      <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem' }}>
        <Box>
          <UserDataForm />
        </Box>
      </Box>

    </>
  );
};

export default App;
