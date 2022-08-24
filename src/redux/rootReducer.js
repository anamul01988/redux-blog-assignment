import {combineReducers} from "redux";
import blogReducer from "./blogs/reducer";
const rootReducer = combineReducers({
    blogs: blogReducer,
})
export default rootReducer;