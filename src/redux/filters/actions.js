import { CLICKCATEGORY } from "./ActionTypes";


export const clickCategory = (category) => {
    return {
        type: CLICKCATEGORY,
        payload: {
            category,
            
        },
    };
};

