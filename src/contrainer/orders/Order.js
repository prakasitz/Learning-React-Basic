import React, { Component } from 'react'
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { connect } from "react-redux"; // connect ไว้ใช้ เชื่อม react กับ redux เข้าด้วยกัน
import { ordersFetch, ordersDelete } from "../../actions";

class Order extends Component {

    componentDidMount() {
        this.props.ordersFetch();
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
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
        this.props.ordersDelete(order.id);
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

function mapStateToProps({orders}) {
    return {orders};
}

export default connect(mapStateToProps, { ordersFetch, ordersDelete})(Order);
