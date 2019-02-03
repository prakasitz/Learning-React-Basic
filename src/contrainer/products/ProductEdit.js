import React, { Component } from 'react'
import Header from "../../component/Header";
import ProductForm from "../../component/product/ProductForm";
import Footer from '../../component/Footer';
import { productCreate, productUpdate, productFetch } from "../../actions";
import { connect } from "react-redux";

class ProductEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { match, formValues, products, productCreate, productUpdate } = this.props; // จะได้ค่า path และ url
        return (
            <div>
                <Header/>
                { match.path.indexOf("add") > 0 && 
                    <div className="container col-md-5">
                        <h2>เพิ่มข้อมูล</h2>
                        {
                            products.saved && (
                                <div class="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                        }
                        <ProductForm onProductSubmit={() => productCreate(formValues)}/>
                    </div>
                }
                { match.path.indexOf("edit") > 0 && 
                    <div className="container col-md-5">
                        <h2>แก้ไขข้อมูล</h2>
                        {
                            products.saved && (
                                <div class="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                        }
                        <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)}/>
                    </div>
                }
                <Footer compeny="Prakasit.Crops" email="prakasitbm@gmail.com" />
            </div>
        )
    }
}

function mapStateToProps({form, products}) {//product อันเดียวนะ เช่น ไก่ ทอด ก็อันเดียว 
    console.log("----------ss   ");
    console.log(form);
    console.log("-");
    return { formValues : form.productForm ? form.productForm.values : null, products }
    // เช็กว่า form.ชื่อฟอร์ม มีอยู่จริงไหม ถ้ามีให้ return value แต่ถ้าไม่ ก็ return null
    //เราจะตั้งซื้อตัวที่เราจะรีเทินว่า formValue โดยมี value และ products
}
export default connect(mapStateToProps, { productCreate, productFetch, productUpdate })(ProductEdit);
