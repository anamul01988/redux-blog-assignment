// import { loadProduct } from "../../actions/productAction";
import React from "react";
import { getContent } from "../../blogs/actions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://redux-blog-server-9e9k.vercel.app/products");
    const data = await res.json();

    if (data?.data.length) {
        console.log(data?.data);
      dispatch(getContent(data?.data));
    }
  };
};

export default fetchBlogs;
