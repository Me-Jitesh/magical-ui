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
        default: grey[900],
        paper: grey[800],
      },
    },
    typography: {
      h1: {
        color: purple[100],  // Lighter color for headings in dark mode
        fontWeight: 700,
      },
      h2: {
        color: purple[200],  // Lighter color for subheadings
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
      primary: purple,
      secondary: grey,
      background: {
        default: grey[100],
        paper: grey[200],
      },
    },
    typography: {
      h1: {
        color: purple[900], // Darker color for headings in light mode
        fontWeight: 700,
      },
      h2: {
        color: purple[800], // Darker color for subheadings
        fontWeight: 600,
      },
      h3: {
        color: purple[700],
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
