const bloggersReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_BLOGGERS":
      return {
        ...state,
        bloggers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default bloggersReducer;
