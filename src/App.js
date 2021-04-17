import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Router>

    </div>
  );
}

export default App;
