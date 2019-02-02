import React, { Component } from 'react';
/*const ProductItem = (props) => {
    const { productName, unitPrice} = props;
    return (
        <div>
            <p>
                {productName}
            </p>
            <p>
                {unitPrice}
            </p>
        </div>
    )
}*/

class ProductItem extends Component {

    render() {
        const { productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" style={{height:150, width:300}} src={thumbnail} alt={productName} />
                <h5 className="mt-2">
                    {productName}
                </h5>
                <p className="text-right title">
                    {unitPrice} THB.
                </p>

                { this.props.onAddOrder && 
                    <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)} >
                        ซื้อ
                    </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn btn-warning col-5 title" >
                        แก้ไข
                    </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct) &&
                    <button className="btn btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)} >
                        ลบ
                    </button>
                }
                <hr/>
            </div>
        )
    }
}

export default ProductItem;