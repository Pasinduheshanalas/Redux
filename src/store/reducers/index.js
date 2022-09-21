import Reducer1 from "./reducer1";
import userReducer from "./user_reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    reducer1 : Reducer1,
    user_reducer : userReducer
})

export default rootReducers;