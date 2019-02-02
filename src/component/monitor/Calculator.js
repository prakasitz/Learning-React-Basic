import React, { Component } from 'react'

export default class Calculator extends Component {
  
  showOrders(orders) {
    if(!orders || orders.length === 0) {
        return <li className="text-light text-muted title">ไม่มีสินค้าค่ะ</li>
    } else {
        return orders.map((order,i) => {
          return  <li className="text-reight text-success title" key={i}>
                    {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                    <button className="btn  btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}> x </button>
                  </li>
        })
    }
  }

  render() {
    const {totalPrice, orders} = this.props;
    return (
      <div>
          <h1 className="text-right">{totalPrice}</h1>
          <hr/>
          <ul className="list-unstyled">
            {this.showOrders(orders)}
          </ul>
          <hr/>
          <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
          <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
      </div>
    )
  }
}
