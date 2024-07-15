import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./Context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = ({ userData, userToken }) => {
    setIsLoggedIn(true);
    setUserInfos(userData);
    localStorage.setItem("user", JSON.stringify({ userToken }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const localStorageinfo = JSON.parse(localStorage.getItem("user"));

    console.log(localStorageinfo);
    if (localStorageinfo) {
    }
  }, []);
  const router = useRoutes(routes);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userInfos, login, logout }}
    >
      <div className="App">{router}</div>
    </AuthContext.Provider>
  );
}

export default App;
