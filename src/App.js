import logo from "./imgs/logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Newsfeed from "./components/Newsfeed";
import Stats from "./components/stats";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      {/* Body */}
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          {/* Stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
