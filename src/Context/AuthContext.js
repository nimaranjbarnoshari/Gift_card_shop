import {
  createContext
} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  allUsers: {},
  userBasket: [],
  login: () => {},
  logout: () => {},
  addToBasket: () => {}
});

export default AuthContext;