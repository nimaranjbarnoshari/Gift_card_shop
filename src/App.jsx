import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./Context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const [allUsers, setAllUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUserInfos(userData);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
      });
  }, []);

  useEffect(() => {
    const localStorageinfo = JSON.parse(localStorage.getItem("user"));
    if (localStorageinfo) {
      const userData = allUsers.find(
        (user) => user.token === localStorageinfo.token
      );
      setUserInfos(userData);
      setIsLoggedIn(true);
    }
  }, [allUsers]);

  const router = useRoutes(routes);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userInfos, login, logout, allUsers }}
    >
      <div className="App">{router}</div>
    </AuthContext.Provider>
  );
}

export default App;
