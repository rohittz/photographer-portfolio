import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Privateroute from './components/Privateroute/Privateroute';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Navpage from './components/Home/Navpage/Navpage';
import LoginButton from './components/Login/LoginButton/LoginButton';
export const menuContext = createContext();
export const userContext = createContext();
export const historyContext = createContext();
export const adminContext = createContext();

function App() {
  document.body.style.backgroundColor = "var(--main-back-1)";
  const [showMenu, setShowMenu] = useState({ display: "none" });
  const [currComp, setCurrComp] = useState("/home");
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    role: ""
  });
  const [adminList, setAdminList] = useState([]);
  useEffect(() => {
    fetch('https://aaron-stanley.herokuapp.com/admins', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setAdminList(data);
      })
  }, []);
  return (
    <div className="App">
      <menuContext.Provider value={[showMenu, setShowMenu]}>
        <historyContext.Provider value={[currComp, setCurrComp]}>
          <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <adminContext.Provider value={[adminList, setAdminList]}>
              <Router>
                <LoginButton></LoginButton>
                <Navpage></Navpage>
                <Switch>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Privateroute path="/dashboard">
                    <Dashboard></Dashboard>
                  </Privateroute>
                </Switch>
              </Router>
            </adminContext.Provider>
          </userContext.Provider>
        </historyContext.Provider>
      </menuContext.Provider>
    </div>
  );
}

export default App;
