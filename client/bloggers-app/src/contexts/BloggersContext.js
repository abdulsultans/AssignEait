import { createContext, useReducer } from "react";
import bloggersReducer from "../reducers/bloggersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  bloggerss: [],
  error: null,
};

export const BloggersContext = createContext();

const BloggersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bloggersReducer, initialState);
  // ALL BLOGGERS
  async function getBloggers() {
    const res = await axios.get(
      "https://bloggersapi.herokuapp.com/api/v6/bloggers"
    );

    try {
      dispatch({
        type: "GET_ALL_BLOGGERS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BloggersContext.Provider value={{ getBloggers, bloggers: state.bloggers }}>
      {children}
    </BloggersContext.Provider>
  );
};
export default BloggersContextProvider;
