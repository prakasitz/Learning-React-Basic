import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer  
})

//ตัวไหนจะทำงาน ดูที่ actionType

//นี่คือตัวรวม reducer

export default rootReducer;