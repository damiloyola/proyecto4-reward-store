import Header from "./components/Header";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing:border-box;
        margin:0;
    }
    body{
        
        font-family: 'Source Sans Pro', sans-serif;
        
    }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />
        </div>
    );
}

export default App;
