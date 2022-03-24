import { combineReducers } from "redux";
import memberReducer from "./myreducer";

const rootReducer = combineReducers({
    members: memberReducer
})

export default rootReducer;