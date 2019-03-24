import React from "react";
import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (

      <React.Fragment>
      <Header/>
      <Router>
        <div>
        <Route exact path="/" component={Restaurant}/>
        <Route  path="/checkout" component={Checkout}/>
        </div>
      </Router>
    </React.Fragment>

    );
  }
}
export default App;
