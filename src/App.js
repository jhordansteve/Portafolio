import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Navbar from './stories/molecules/navBar/NavBar';
import { Element } from "react-scroll";
import Portada from './stories/molecules/portada/portada';
import Skills from './stories/organisms/Skills/Skills';
import Experiencia from './stories/organisms/Experiencia/Experiencia';
import Formacion from './stories/organisms/Formacion/Formacion';
import Footer from './stories/organisms/Footer/Footer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const pages = ["Home", "Formacion", "Skills", "Experiencia"];

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const Container = ({ options }) => {
  switch (options) {
    case 'Home':
      return <Portada />;
    case "Formacion":
      return <Formacion />;
    case "Skills":
      return <Skills />;
    case "Experiencia":
      return <Experiencia />;
  }
}

function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <Box sx={{bgcolor: "background.default"}} >
          <Navbar pages={pages}>
            <MyApp />
          </Navbar>
          {pages.map(item =>
            <Element key={item} name={item}>
              <Container options={item} />
            </Element>
          )}
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
