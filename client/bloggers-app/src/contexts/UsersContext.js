import axios from "axios";
import { createContext, useReducer } from "react";
import userReducer from "../reducers/usersReducer";

const initialState = {
  isPending: true,
  user: {},
  error: null,
};

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // login a user
  async function loginUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await axios.post(
      "https://bloggersapi.herokuapp.com/api/v6/users/login",
      user,
      config
    );
    localStorage.setItem("userInfo", data);
    dispatch({
      type: "LOGIN_USER",
      payload: data,
    });
    console.log(data);
  }
  // register

  async function registerUser(newuser) {
    const data = await axios.post(
      "https://bloggersapi.herokuapp.com/api/v6/users/login",
      newuser,
      config
    );
    dispatch({
      type: "REGISTER_USER",
      payload: data,
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(data);
  }

  return (
    <UsersContext.Provider
      value={{
        loginUser,
        user: state.user,
        isPending: state.isPending,
        registerUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContextProvider;
