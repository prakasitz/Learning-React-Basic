//คืิ ฟังัช่น ปกติ ที่รับ action เพื่อไปเปลี่ยนแปลงข้อมูล sttate
import { ORDERS_FECTH } from "../actions/types";

export default (state = [], action) => {
    //ต้องเช็กแอกชั่นด้วยนะ 
    switch (action.type) {
        case ORDERS_FECTH: //แบบนี้ hard code นะจ้ะ
            return action.payload;
        default:
            return state;
    }
}

