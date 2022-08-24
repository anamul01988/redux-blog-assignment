import { CATEGORYCHECKED,TITLECHECKED, AUTHORIMGCHECKED,AUTHORTITLECHECKED } from "./actionTypes"
import initialState from "./initialState";

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CATEGORYCHECKED:
            return state.filter((todo)=> todo.category === action.payload);
        case TITLECHECKED:
            return state.filter((todo)=> todo.title === action.payload);
        case AUTHORIMGCHECKED:
            return state.filter((todo)=> todo.author_img === action.payload);
        case AUTHORTITLECHECKED:
            return state.filter((todo)=> todo.author_title === action.payload);
        default:
            return state;
    }
 
}
export default reducer;
