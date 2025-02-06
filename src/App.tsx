import { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#a594f9' },
      secondary: { main: '#8d99ae' },
      info: { main: '#4cdef5' },
      background: {
        default: '#0e0b16',
        paper: '#0d0c1d',
      },
    },
    typography: {
      fontFamily: "poppins, sans-serif",
      h5: {
        color: '#a594f9',
        fontWeight: 200,
      },
      h6: {
        fontFamily: 'Potra',
        color: '#a594f9',
        fontWeight: 200,
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#8d99ae' },
      secondary: { main: '#fee715' },
      info: { main: '#4cdef5' },

      background: {
        default: '#3f3250',
        paper: '#edf2fa',
      },
    },
    typography: {
      fontFamily: "Quicksand, sans-serif",
      h5: {
        color: '#3f3250',
        fontWeight: 900,
      },
      h6: {
        fontFamily: 'Quantum Lemon Bold',
        color: '#ffffff',
        fontWeight: 200,
      },
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
