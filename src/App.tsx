import { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { purple, grey } from '@mui/material/colors';
import AppRoutes from './routes';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: purple,
      secondary: grey,
      background: {
        default:'#27293d',
        paper: '#27293f',
      },
    },
    typography: {
      h1: {
        color: purple[100],
        fontWeight: 700,
      },
      h2: {
        color: purple[200],
        fontWeight: 600,
      },
      h3: {
        color: purple[300],
        fontWeight: 500,
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
        fontWeight: 500,
      },
      h6: {
        color: '#ffffff',
        fontWeight: 500,
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
