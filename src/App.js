import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
export const menuContext = createContext();
export const historyContext = createContext();

function App() {
  document.body.style.backgroundColor = "var(--main-back-1)";
  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [currComp, setCurrComp] = useState("/home");
  return (
    <div className="App">
      <menuContext.Provider value={[showMenu, setShowMenu]}>
        <historyContext.Provider value={[currComp, setCurrComp]}>
          <Router>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Router>
        </historyContext.Provider>
      </menuContext.Provider>
    </div>
  );
}

export default App;
