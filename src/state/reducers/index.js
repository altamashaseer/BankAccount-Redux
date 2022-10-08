import { combineReducers } from "redux";
import amountReducer from "./amount-Reducer";

const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;