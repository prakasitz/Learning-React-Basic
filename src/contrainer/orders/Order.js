import React, { Component } from 'react'
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Axios from 'axios';
export default class Order extends Component {

    constructor(props) {
        super(props);
        this.state = { orders : null};
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/orders").then(
            res => {
                this.setState({orders: res.data});
            }
        )
    }

    showOrders() {
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>x</button>
                    </p>
                    <h5 className="title">
                        วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}
                    </h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return ( 
                                <li key={record.product.productId}>
                                    {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title"> ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    delOrder(order) {
        Axios.delete("http://localhost:3001/orders/"+order.id).then(
            res => {
                Axios.get("http://localhost:3001/orders").then(
                    res => {
                        this.setState({ orders: res.data});
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
                <h1 className="title"> รายการสั่งซื้อ </h1>
                <div className="row">
                    {this.showOrders()}
                </div>
            </div>
            <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
        
        </div>
    )
  }
}
