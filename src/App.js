import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./components/GlobalStyles/theme";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
