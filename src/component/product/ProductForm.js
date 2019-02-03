import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormField } from "../product/formFields";
import { connect } from "react-redux"; 

class ProductForm extends Component {

    renderFields (formFields) {
        return formFields.map(( { label, name, type, required } ) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField}/>
            )
        });
    }

    render() {
        const { onProductSubmit } = this.props;
        return ( //handleSubmit เป็น prop ของ redux (ถ้าค่าที่ส่งไป error ก็จะเกิดการแสดงผล)
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}> 
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    console.log(values);
    const errors = {};
    productFormField.forEach(({name, required}) => {
        if(!values[name] && required) {
            errors[name] = "กรุณากรอกข้อมูลด้วย";
        }
    });
    return errors;
}

//ตัว reduxForm จะส่งไปให้ตัว FormField และส่งต่อไปให้ตัว component

ProductForm = reduxForm({ validate, form : "productForm" })(ProductForm); // productForm คือชื่อ ของ form นะจ้ะ


//ฟังัช่นอันนี้เอาไ้วดึงค่าข้อมูลใน store มาแสดง
function mapStateToProps({products}) {
    //redux-form จะมี props ตัวนึงให้เราสามารถเอาค่าไป set ใน props ตัวนั้น
    //และจากนั้นมันจะทำการประมวลผลและเอามาขึ้นตรงนี้ให้เราให้ ผ่านตัว redux-form
    //นั้นคือ initialValues
    //แต่เช็กก่อนนะ เพราะใช้ทั้ง แก้ไข และ เพิ่ม
    if(products && products.id ) {
        return { initialValues : products};
    } else { // ไม่มีเป็นหน้า เพิ่ม
        return {};
    }
}

export default connect(mapStateToProps)(ProductForm); //ไม่ต้องใส้ action เพราะไม่ได้เอามาทำไร
