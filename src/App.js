import './App.css';
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";




const promise = loadStripe(
  "pk_test_51HnnJ0FPNMmdgJ6pIYLrXYYdA61mFQq5OCjb4WyPdDrFUf3U3RzNEOf1lqtut5ZXKz0DzuCdeaMv1PgPmiVmt1OU00k4UX0HFR"
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
//CA VA ROULER une fois quand le component telecharge 
    auth.onAuthStateChanged(authUser => {
      console.log(`THE USER IS >>>`, authUser);

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
        <Route path="/orders">
            <Header />
            <Orders/>
            </Route>
          <Route path="/login">
            <Login/>
            </Route>
            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
            <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements> 
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
