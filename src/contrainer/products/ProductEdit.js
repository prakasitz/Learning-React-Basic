import React, { Component } from 'react'
import Header from "../../component/Header";
import ProductForm from "../../component/product/ProductForm";
import Footer from '../../component/Footer';
class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container col-md-5">
                    <ProductForm/>
                </div>
                <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
            </div>
        )
    }
}

export default ProductEdit;
