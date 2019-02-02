import React, { Component } from 'react'
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import ProductList from '../../component/product/ProductList';
import axios from 'axios';
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { products : null};
        this.delProduct = this.delProduct.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3001/productss").then(
            res => {
                this.setState({products : res.data});
            }
        )
    }

    delProduct(product) {
        console.log("delProduct:",product.id);
        axios.delete("http://localhost:3001/productss/"+product.id).then(
            () => {
                axios.get("http://localhost:3001/productss").then(
                    res => {
                        this.setState({ products: res.data});
                    }
                )
            }
        )
        
    }
    
    render() {
      return (
        <div>
           <Header/>
           <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>สินค้า</h1>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success title float-right">เพิ่ม</button>
                    </div>
                </div>
                <ProductList products={this.state.products}
                    onDelProduct={this.delProduct} 
                />
           </div>
           <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
        </div>
      )
    }
}
