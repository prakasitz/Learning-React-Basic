import React, { Component } from 'react';
import Header from "./component/Header";
import Footer from './component/Footer';
import ProductItem from './component/product/ProductItem';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <ProductItem productName="iPhonX" unitPrice="40500" />
          <ProductItem productName="iPadPro" unitPrice="30500" />
          <ProductItem productName="iPadmini" unitPrice="40500" />
          <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
      </div>
    );
  }
}

export default App;
