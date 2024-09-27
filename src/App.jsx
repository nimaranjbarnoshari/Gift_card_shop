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
  const [accountBalance, setAccountBalance] = useState(0);
  const [allGamesData, setAllGamesData] = useState([]);
  const [allaccounts, setAllaccounts] = useState([]);
  const [giftsCategory, setGiftsCategory] = useState([]);
  const [allGifts, setAllGifts] = useState([]);
  const [allSoftwares, setAllSoftwares] = useState([]);
  const [allAccessories, setAllAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json())
      .then((data) => setAllGamesData(data));
    fetch("http://localhost:8000/accounts")
      .then((res) => res.json())
      .then((data) => setAllaccounts(data));
    fetch("http://localhost:8000/gifts")
      .then((res) => res.json())
      .then((data) => setGiftsCategory(data));
    fetch("http://localhost:8000/softwares")
      .then((res) => res.json())
      .then((data) => setAllSoftwares(data));
    fetch("http://localhost:8000/digits")
      .then((res) => res.json())
      .then((data) => setAllAccessories(data));
  }, []);

  useEffect(() => {
    const giftCards = [];
    giftsCategory.forEach((gift) => {
      gift.giftCards.forEach((eachGift, index) => {
        if (index <= 1) {
          giftCards.push(eachGift);
        }
      });
    });
    setAllGifts(giftCards);
  }, [giftsCategory]);

  const setData = (data, filterKry) => {
    const category = data.filter((game) => game.category === filterKry);
    return category;
  };

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

  const addToBasket = (datas) => {
    if (isLoggedIn) {
      const isProduct = userBasket.find((data) => data.title === datas.title);

      if (isProduct) {
        Swal.fire({
          title: "این محصول در سبد خرید شما موجود است",
          text: "در صورت تمایل، میتوانید در سبد خرید تعداد آن را افزایش دهید",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "رفتن به سبد خرید",
          cancelButtonText: "ادامه دادن در همین صفحه",
          cancelButtonColor: "#Fd295c",
          iconColor: "#Fd295c",
          confirmButtonColor: "",
        }).then((answer) => {
          if (answer.isConfirmed) {
            navigate("/carts");
          }
        });
      } else {
        const product = { ...datas };
        if (product.off) {
          product.price = product.price - (product.price * product.off) / 100;
        }

        const newBasket = [...userBasket, { ...product, count: 1 }];

        Swal.fire({
          title: `${datas.title} را به سبد خرید اضافه میکنید؟`,
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
                Swal.fire({
                  title: `${datas.title} به سبد خرید شما اضافه شد`,
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

  const removeFromBasket = (id, title) => {
    Swal.fire({
      title: `میخواهید ${title} را از سبد خرید حذف کنید؟`,
      icon: "question",
      confirmButtonText: "بله",
      cancelButtonText: "انصراف",
      showCancelButton: true,
      showCloseButton: true,
      iconColor: "#Fd295c",
      cancelButtonColor: "#Fd295c",
    }).then((answer) => {
      if (answer.isConfirmed) {
        const newBasket = [...userBasket].filter((basket) => basket.id !== id);

        fetch(`http://localhost:8000/users/${userInfos.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ basket: newBasket }),
        }).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: `${title} با موفقیت از سبد خرید حذف شد`,
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
  };

  const addCount = (id) => {
    const product = userBasket.map((item) => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });

    fetch(`http://localhost:8000/users/${userInfos.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ basket: product }),
    })
      .then((res) => {
        if (res.ok) {
          res.json();
        }
      })
      .then((data) => {
        fetch("http://localhost:8000/users")
          .then((res) => res.json())
          .then((data) => {
            setAllUser(data);
          });
        console.log(data);
      });

    console.log(product);
  };

  const minusCount = (id) => {
    const product = userBasket.map((item) => {
      if (item.id === id) {
        item.count -= 1;
      }
      return item;
    });

    fetch(`http://localhost:8000/users/${userInfos.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ basket: product }),
    })
      .then((res) => {
        if (res.ok) {
          res.json();
        }
      })
      .then((data) => {
        fetch("http://localhost:8000/users")
          .then((res) => res.json())
          .then((data) => {
            setAllUser(data);
          });
      });
  };

  const chargeBalance = (amount) => {
    Swal.fire({
      title: `شما در حال واریز مبلغ ${amount.toLocaleString()} به کیف پول خود هستید`,
      text: "آیا ادامه می دهید؟",
      icon: "question",
      confirmButtonText: "بله",
      cancelButtonText: "انصراف",
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
          body: JSON.stringify({ balance: amount + accountBalance }),
        })
          .then((res) => {
            if (res.ok) {
              res.json();
            }
          })
          .then((data) => {
            fetch("http://localhost:8000/users")
              .then((res) => res.json())
              .then((data) => {
                Swal.fire({
                  title: `کیف پول شما به مبلغ ${amount.toLocaleString()} شارژ شد.`,
                  showConfirmButton: true,
                  confirmButtonColor: "#Fd295c",
                }).then(() => {
                  setAllUser(data);
                });
              });
          });
      }
    });
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
        setAccountBalance(userInfos.balance);
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
        addCount,
        minusCount,
        removeFromBasket,
        accountBalance,
        chargeBalance,
        allGamesData,
        allaccounts,
        allGifts,
        giftsCategory,
        setData,
        allSoftwares,
        allAccessories,
      }}
    >
      <div className="App">{router}</div>
    </AuthContext.Provider>
  );
}

export default App;
