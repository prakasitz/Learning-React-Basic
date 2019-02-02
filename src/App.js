import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import NotFound  from "./contrainer/errors/NotFound";
import Home from "./contrainer/Home";
import About from "./contrainer/About";
import Order from "./contrainer/orders/Order";
import Product from "./contrainer/products/Product";
import './App.css';


//ต้องทำให้มันใส่ตัว browser router และ switch ได้

class App extends Component {
  renderRouter() {
    return (
      <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/orders" component={Order} /> 
          <Route exact path="/products" component={Product} /> 

          <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <Router>
        {this.renderRouter()}
      </Router>
    )
  }
}

export default App;
