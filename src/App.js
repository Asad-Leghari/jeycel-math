import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SharedLayout from './components/Shared/SharedLayout';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DirectVariations from './components/DirectVariations/DirectVariations';
import InDirectVariations from './components/InDirectVariation/InDirectVariations';
import JointVariations from './components/JointVariations/JointVariations';
import CombinedVariations from './components/CombinedVariations/CombinedVariations';

function App() {
  const [darkMode, setdarkMode] = useState(false)

  const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#fff'
        },
        jey: {
          a0: 'white',
          head: 'crimson',
          header: 'crimson',
          bordercolor: 'white',
          o1Clr: 'hsl(50, 100%, 60%)',
          a0Clr: 'hsl(220, 50%, 20%)',
          a1Clr: 'hsl(220, 65%, 26%)',
          a2Clr: 'hsl(220, 50%, 30%)',
          a3Clr: 'hsl(50, 90%, 85%)',
          a4Clr: 'hsl(50, 100%, 96%)',
          b0Clr: 'hsl(210, 80%, 9%)',
          b1Clr: 'hsl(210, 80%, 12%)',
          b2Clr: 'hsl(210, 100%, 25%)',
          b3Clr: 'hsl(214, 100%, 84%)',
          b4Clr: 'hsl(214, 100%, 94%)',
          bg: 'black'
        }
    }
  });

  const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#ffff'
        },
        jey: {
          a0: 'black',
          head: 'blue',
          header: 'crimson',
          bordercolor: 'black',
          o1Clr: 'hsl(100, 100%, 30%)',
          a0Clr: 'hsl(60, 100%, 97%)',
          a1Clr: 'hsl(50, 100%, 95%)',
          a2Clr: 'hsl(50, 100%, 85%)',
          a3Clr: 'hsl(45, 100%, 77%)',
          a4Clr: 'hsl(50, 100%, 28%)',
          b0Clr: 'hsl(213, 100%, 96%)',
          b1Clr: 'hsl(214, 100%, 93%)',
          b2Clr: 'hsl(214, 100%, 84%)',
          b3Clr: 'hsl(214, 65%, 43%)',
          b4Clr: 'hsl(214, 100%, 25%)',
          bg: 'white'
        }
    }
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { background: darkMode ? 'linear-gradient(to right, hsl(214, 50%, 10%) 0%, hsl(214, 20%, 9%) 20%, hsl(214, 20%, 9%) 50%, hsl(214, 20%, 9%) 80%, hsl(214, 50%, 10%) 100%)' : 'linear-gradient(to right, hsla(214, 100%, 90%, 100%) 0%, hsla(214, 100%, 90%, 0%) 20%, hsla(214, 100%, 90%, 0%) 50%, hsla(214, 100%, 90%, 0%) 80%, hsla(214, 100%, 90%, 100%) 100%)' }
        }}
      />
      <Routes>
        <Route path='/' element={<SharedLayout theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />}>
          <Route index element={<Home theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />} />
          <Route path='Direct-Variations' element={<DirectVariations theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />} />
          <Route path='Indirect-Variations' element={<InDirectVariations theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />} />
          <Route path='Joint-Variations' element={<JointVariations theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />} />
          <Route path='Combined-Variations' element={<CombinedVariations theme={darkMode ? darkTheme : lightTheme} darkMode={darkMode} setdarkMode={setdarkMode} />} />
        </Route>
      </Routes>
      </ThemeProvider>
  );
}

export default App;
