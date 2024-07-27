import * as Yup from "yup"

const loginSchema = Yup.object().shape({

    phone: Yup.string()
        .matches(/^(\+98|0)?9\d{9}$/, "شماره وارد شده معتبر نمی باشد")
        .required("وارد کردن شماره الزامی می باشد"),

    password: Yup.string()
        .min(8, "طول رمز نباید کمتر از ۸ کاراکتر باشد")
        .max(20, "طول رمز نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("وارد کردن رمز عبور الزامی می باشد"),
})

export default loginSchema