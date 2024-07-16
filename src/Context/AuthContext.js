import {
  createContext
} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  allUsers : {},
  login: () => {},
  logout: () => {}
});

export default AuthContext;