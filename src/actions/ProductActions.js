//  1 ส่งไปหา reducer เพื่อเปลี่ยนข้อมูล order รายการสั่งซื้อ
// 2 ตัวรายการสั่งซื้อเราต้องโหลดมาจากตัว server ต้องใช้ axios
import axios from "axios";
import { PRODUCTS_FECTH } from "./types";

export const productsFetch = () => {

    return dispatch => {
        axios.get("http://localhost:3001/productss").then(
            res => {
                dispatch({ type : PRODUCTS_FECTH, payload : res.data});
            }
            //return จาก obj เป็น func ได้ ช่วยเรื่อง callback
        )
    }
}

export const productsDelete = (id) => {
    return dispatch => {
        axios.delete("http://localhost:3001/productss/"+id).then(
            () => {
                axios.get("http://localhost:3001/productss").then(
                    res => {
                        dispatch({ type : PRODUCTS_FECTH, payload : res.data});
                    }
                )
            }
        )
    }
}