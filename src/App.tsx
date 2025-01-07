import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { pplTheme } from "./styles/SystemDesign";

function App() {
    return (
        <ThemeProvider theme={pplTheme}>
            <GlobalStyle />
            <div>Content</div>
        </ThemeProvider>
    );
}

export default App;
