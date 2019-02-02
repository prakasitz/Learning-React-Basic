//สำหรับเก็บข้อมูลของสินค้าหลายๆตัว
import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    
    showProducts() {
        return this.props.products && this.props.products.map((product) => (
            <ProductItem 
                product={product} 
                key={product.productId} 
                onAddOrder={this.props.onAddOrder} 
                onDelProduct={this.props.onDelProduct}
                onEditProduct={this.props.onEditProduct}
                />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

