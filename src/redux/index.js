import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import chartReducer from "./chart";

const reducer = combineReducers({
    chart: chartReducer
})
let store = createStore(reducer, applyMiddleware(thunk))
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
export default store