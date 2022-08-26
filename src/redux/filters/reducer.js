
import { CLICKCATEGORY } from "./ActionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICKCATEGORY:
            return {
                ...state,
                category: action.payload,
            };

       

        default:
            return state;
    }
};

export default reducer;
