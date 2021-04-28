import Header from "./components/header/Header";
import Products from "./components/main/Products";
import Coins from "./components/main/Coins";
import History from "./components/main/History";
import Provider from "./components/context/Context";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Provider>
                <Router>
                    <Header />
                    <main>
                        <Route path="/" component={Products} exact />
                        <Route path="/coins" component={Coins} />
                        <Route path="/history" component={History} />
                    </main>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
