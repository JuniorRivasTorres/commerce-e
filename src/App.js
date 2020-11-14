import './App.css';
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
//CA VA ROULER une fois quand le component telecharge 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
  //lutilisateur login et lutilisateur log out
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        User: null
      })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
            </Route>
            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
            <Header />
            <Payment />
              
            </Route>
            <Route path="/">
            <Header />
              <Home />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
