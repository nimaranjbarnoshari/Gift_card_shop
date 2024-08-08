import {
  createContext
} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  totalPrice: NaN,
  allUsers: {},
  userBasket: [],
  login: () => {},
  logout: () => {},
  addToBasket: () => {}
});

export default AuthContext;