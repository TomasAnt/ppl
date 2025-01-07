import { ThemeProvider } from "styled-components";
import KanbanBoard from "./screens/KanbanBoard/KanbanBoard";
import GlobalStyle from "./styles/GlobalStyle";
import { pplTheme } from "./styles/SystemDesign";

function App() {
    return (
        <ThemeProvider theme={pplTheme}>
            <GlobalStyle />
            <KanbanBoard />
        </ThemeProvider>
    );
}

export default App;
