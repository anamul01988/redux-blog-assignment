import { CATEGORYCHECKED,TITLECHECKED, AUTHORIMGCHECKED,AUTHORTITLECHECKED } from "./actionTypes"

export const categoryChecked = (blogCategory) =>{
    return {
        type: CATEGORYCHECKED,
        payload: blogCategory,
    }
}
export const titleChecked = (blogTitle) =>{
    return {
        type: TITLECHECKED,
        payload: blogTitle,
    }
}
export const authorImgChecked = (blogAuthorImg) =>{
    return {
        type: AUTHORIMGCHECKED,
        payload: blogAuthorImg,
    }
}
export const authorTitleChecked = (blogAuthorTitle) =>{
    return {
        type: AUTHORTITLECHECKED,
        payload: blogAuthorTitle,
    }
}