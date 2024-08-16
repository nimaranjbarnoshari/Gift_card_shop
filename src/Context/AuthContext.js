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
  addToBasket: () => {},
  addCount: () => {},
  minusCount: () => {},
  removeFromBasket: () => {}
});

export default AuthContext;