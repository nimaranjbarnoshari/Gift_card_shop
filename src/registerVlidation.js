import * as Yup from "yup"

const registerSchema = Yup.object().shape({

    fullName: Yup.string()
        .min(6, "نام کامل نباید کمتر از ۶ کاراکتر باشد")
        .max(25, "نام کامل نباید بیشتر از ۲۵ کاراکتر باشد")
        .required("وارد کردن شماره الزامی می باشد"),

    email: Yup.string()
        .min(10, "ایمیل نباید کمتر از ۸ کاراکتر باشد")
        .max(30, "ایمیل نباید بیشتر از ۳۰ کاراکتر باشد")
        .email("ایمیل معتبر نمی باشد")
        .required("وارد کردن شماره الزامی می باشد"),

    password: Yup.string()
        .min(8, "رمز عبور نباید کمتر از ۸ کاراکتر باشد")
        .max(20, "رمز  عبور نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("وارد کردن رمز عبور الزامی می باشد"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "تکرار رمز عبور منطبق نیست")
        .required("وارد کردن تکرار رمز عبور الزامی می باشد")
})

const changePassSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "رمز عبور نباید کمتر از ۸ کاراکتر باشد")
        .max(20, "رمز  عبور نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("وارد کردن رمز عبور الزامی می باشد"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "تکرار رمز عبور منطبق نیست")
        .required("وارد کردن تکرار رمز عبور الزامی می باشد")
})

export  {registerSchema, changePassSchema}