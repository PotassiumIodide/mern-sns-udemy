import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


// 最初のユーザー状態を定義
const initialState = {
  user : {
    _id: "631167043276c8d7404660d9",
    username: "管理者くん",
    email: "admin.kun@gmail.com",
    password: "iamadmin",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,    
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return <AuthContext.Provider value={{
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  }}>
    {children}
  </AuthContext.Provider>;
};