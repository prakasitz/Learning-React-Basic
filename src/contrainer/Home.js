import React, { Component } from 'react';
import Header from "../component/Header";
import Monitor from '../component/monitor/Monitor';
import Footer from '../component/Footer';
import { connect } from "react-redux"; // connect ไว้ใช้ เชื่อม react กับ redux เข้าด้วยกัน
import { productsFetch } from "../actions";

class Home extends Component {
  /*componentDidMount() {
    this.setState({products : [
      {productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/img/itemProducts/salad.jpg"},
      {productId: 2, productName: "ไก่ทอด", unitPrice: "290", thumbnail: "/img/itemProducts/chickenfide.jpg"},
      {productId: 3, productName: "บิงซู", unitPrice: "150", thumbnail: "/img/itemProducts/bingshu.jpg"},
      {productId: 4, productName: "เฟรนฟราย", unitPrice: "80", thumbnail: "/img/itemProducts/frenchfries.jpg"},
      {productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "220", thumbnail: "/img/itemProducts/cake3floor.jpg"},
      {productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/img/itemProducts/coffee.jpg"}
    ]});
  }*/

  /*componentDidMount() {
    fetch("http://localhost:3001/products", {method : "GET"})
      .then(res => res.json())
      .then(res => { this.setState({ products: res}) });
  }*/

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return ( // state มันไม่มีแล้ว จึงใช้ props แทน
        <div className="Home">
          <Header/>
          <Monitor products={this.props.products}/> 
          <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
        </div>
    );
  }
}

function mapStateToProps({ products }) { //นี่ คือ state ใน store นะ  state react ลบไปแล้ว
  return { products }; // ถ้า มันเหมือนกัน ใช้ deconstructor 
}

export default connect(mapStateToProps, { productsFetch })(Home);
