import { Divider, ThemeProvider, Toolbar } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";

const turnKeyTheme = createTheme({
  palette: {
    primary: {
      light: "#974e50",
      main: "#682d36",
      dark: "#56202b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#606060",
      main: "#ffffff",
      dark: "#a0a0a0",
      contrastText: "#000000",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={turnKeyTheme}>
      <NavBar />
      <Toolbar />
      <Banner />
      <Divider />
      <AboutSection />
      <Divider />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
