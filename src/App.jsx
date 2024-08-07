import "./App.css";
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./Context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const navigate = useNavigate();
  const [allUsers, setAllUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});
  const [userBasket, setUserBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUserInfos(userData);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = () => {
    Swal.fire({
      title: "شما در حال خروج از حساب کاربری خود هستید. ادامه می دهید ؟",
      icon: "warning",
      iconColor: "#Fd295c",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "خیر",
      confirmButtonText: "بله،‌خارج می شوم",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "شما از حساب کاربری خود خارج شدید",
          confirmButtonColor: "#Fd295c",
          icon: "success",
          iconColor: "#Fd295c",
        }).then(() => {
          setIsLoggedIn(false);
          setToken(null);
          localStorage.removeItem("user");
        });
      }
    });
  };

  const addToBasket = (datas, id) => {
    const result = datas.filter((data) => id === data.id);
    if (isLoggedIn) {
      const isProduct = userBasket.find(
        (data) => data.title === result[0].title
      );

      if (isProduct) {
        Swal.fire({
          title: "این محصول در سبد خرید شما موجود است",
          text: "در صورت تمایل، میتوانید در سبد خرید تعداد آن را افزایش دهید",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "برو به سبد خرید",
          cancelButtonText: "همینجا میمونم",
          cancelButtonColor: "#Fd295c",
          iconColor: "#Fd295c",
          confirmButtonColor: "",
        }).then((answer) => {
          if (answer.isConfirmed) {
            navigate("/carts");
          }
        });
      } else {
        const newBasket = [...userBasket, { ...result[0], count: 1 }];

        Swal.fire({
          title: `${result[0].title} را به سبد خرید اضافه میکنید؟`,
          icon: "question",
          confirmButtonText: "بله",
          cancelButtonText: "خیر",
          showCancelButton: true,
          showCloseButton: true,
          iconColor: "#Fd295c",
          cancelButtonColor: "#Fd295c",
        }).then((answer) => {
          if (answer.isConfirmed) {
            fetch(`http://localhost:8000/users/${userInfos.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ basket: newBasket }),
            }).then((res) => {
              if (res.ok) {
                console.log(result[0].title);
                Swal.fire({
                  title: `${result[0].title} به سبد خرید شما اضافه شد`,
                  icon: "success",
                  iconColor: "#Fd295c",
                  confirmButtonColor: "#Fd295c",
                }).then(() => {
                  fetch("http://localhost:8000/users")
                    .then((res) => res.json())
                    .then((data) => {
                      setAllUser(data);
                    });
                });
              }
            });
          }
        });
      }
    } else {
      Swal.fire({
        title: "لطفا وارد حساب کاربری خود شوید",
        icon: "error",
        iconColor: "#Fd295c",
        confirmButtonColor: "#Fd295c",
      }).then(() => {
        navigate("/login");
      });
    }
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

  useEffect(() => {
    if (userInfos) {
      if (Object.hasOwn(userInfos, "basket")) {
        setUserBasket(userInfos.basket);
      }
    }
  }, [userInfos]);

  useEffect(() => {
    const total = userBasket.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);

    setTotalPrice(total);
  }, [userBasket]);

  const router = useRoutes(routes);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
        allUsers,
        addToBasket,
        userBasket,
        totalPrice,
      }}
    >
      <div className="App">{router}</div>
    </AuthContext.Provider>
  );
}

export default App;
