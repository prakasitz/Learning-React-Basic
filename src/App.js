import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Home from "./contrainer/Home";
import About from "./contrainer/About";
import Order from "./contrainer/orders/Order";
import Product from "./contrainer/products/Product";
import ProductEdit from "./contrainer/products/ProductEdit";
import NotFound  from "./contrainer/errors/NotFound";



//ต้องทำให้มันใส่ตัว browser router และ switch ได้

class App extends Component {
  renderRouter() {
    return (
      <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/orders" component={Order} /> 

          <Route exact path="/products" component={Product} /> 
          <Route exact path="/products/add" component={ProductEdit} /> 
          <Route exact path="/products/edit/:id" component={ProductEdit} /> 

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
