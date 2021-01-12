import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";
import Provider from "./context/provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
