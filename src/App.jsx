import Header from "./components/header/Header";
import Products from "./components/main/Products";
import Coins from "./components/main/Coins";
import History from "./components/main/History";
import Provider from "./components/context/Context";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
        
          <Route path= "/" component = {Products} />
          <Route path= "/coins" component = {Coins} />
          <Route path = "/history" component = {History}/>
        </Router>
        
      </Provider>
    </div>
  );
}

export default App;
