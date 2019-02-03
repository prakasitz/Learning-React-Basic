//คืิ ฟังัช่น ปกติ ที่รับ action เพื่อไปเปลี่ยนแปลงข้อมูล sttate
import { PRODUCTS_FECTH, PRODUCT_CREATE, PRODUCT_FECTH, PRODUCT_UPDATE } from "../actions/types";

export default (state = [], action) => {
    //ต้องเช็กแอกชั่นด้วยนะ 
    switch (action.type) {
        case PRODUCTS_FECTH: //แบบนี้ hard code นะจ้ะ
        case PRODUCT_FECTH: //แบบนี้ hard code นะจ้ะ
            return action.payload;
        case PRODUCT_CREATE: //แบบนี้ hard code นะจ้ะ
            return { saved : true, msg: "บันทึกสินค้าเรียบร้อยค่ะ"};
        case PRODUCT_UPDATE: //แบบนี้ hard code นะจ้ะ
        return { ...state, saved : true, msg: "บันทึกสินค้าเรียบร้อยค่ะ"}; //ส่งข้อมูลสินค้าเก่าด้วย
        
        default:
            return state;
    }
}

