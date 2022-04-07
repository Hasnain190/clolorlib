import logo from './logo.svg';
import './App.css';
import Discover from './components/Discover';
import Nav from './components/nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Discover />
    </div>
  );
}

export default App;
