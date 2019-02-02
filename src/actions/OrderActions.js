//  1 ส่งไปหา reducer เพื่อเปลี่ยนข้อมูล order รายการสั่งซื้อ
// 2 ตัวรายการสั่งซื้อเราต้องโหลดมาจากตัว server ต้องใช้ axios
import axios from "axios";
import { ORDERS_FECTH } from "./types";

export const ordersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res => {
                dispatch({ type : ORDERS_FECTH, payload : res.data});
            }
            //return จาก obj เป็น func ได้ ช่วยเรื่อง callback
        )
    }
}

export const ordersDelete = (id) => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/"+id).then(
            () => {
                axios.get("http://localhost:3001/orders").then(
                    res => {
                        dispatch({ type : ORDERS_FECTH, payload : res.data});
                    }
                )
            }
        )
    }
}