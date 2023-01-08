// import { addProduct } from "../../actions/productAction";
import { addContent, updateContent } from "../../blogs/actions";
import axios from "axios";
const updateBlog = (blogId, title) => {
  console.log("updateBLOg",blogId, title);
  return async (dispatch, getState) => {
    const res = await fetch(`https://redux-blog-server-9e9k.vercel.app/product/${blogId}`, {
      method: "PATCH",
      body: JSON.stringify({
        _id: blogId,
        title: title
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
      // title,
    });
    const blog = await res.json();
    console.log("after response", blog._id, blog.title);
    dispatch(updateContent(blog._id, blog.title));
    // if (res.status == 200) {
    //   console.log("paice",res.data, res.data.insertedId, res.data.title);
    //   dispatch(updateContent(res.data.insertedId, res.data.title));
    // }
   
  };
};

export default updateBlog;
