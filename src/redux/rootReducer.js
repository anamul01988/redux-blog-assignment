import {combineReducers} from "redux";
import blogReducer from "./blogs/reducer";
import filterReducer from "./filters/reducer";
const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filterReducer,
})
export default rootReducer;