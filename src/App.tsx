import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Counter from './components/Counter';


const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
