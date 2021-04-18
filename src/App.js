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
import Privateroute from './components/Privateroute/Privateroute';
import Login from './components/Login/Login';
export const menuContext = createContext();
export const userContext = createContext();
export const historyContext = createContext();

function App() {
  document.body.style.backgroundColor = "var(--main-back-1)";
  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [currComp, setCurrComp] = useState("/home");
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    role: ''
  });
  return (
    <div className="App">
      <menuContext.Provider value={[showMenu, setShowMenu]}>
        <historyContext.Provider value={[currComp, setCurrComp]}>
          <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Router>
          </userContext.Provider>
        </historyContext.Provider>
      </menuContext.Provider>
    </div>
  );
}

export default App;
