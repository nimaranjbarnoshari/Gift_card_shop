import * as Yup from "yup"

const commentSchema = Yup.object().shape({

    fullName: Yup.string()
        .min(6, "نام کامل نباید کمتر از ۶ کاراکتر باشد")
        .max(25, "نام کامل نباید بیشتر از ۲۵ کاراکتر باشد")
        .required("وارد کردن نام و نام خانوادگی الزامی می باشد"),

    email: Yup.string()
        .min(10, "ایمیل نباید کمتر از ۸ کاراکتر باشد")
        .max(30, "ایمیل نباید بیشتر از ۳۰ کاراکتر باشد")
        .email("ایمیل معتبر نمی باشد")
        .required("وارد کردن ایمیل الزامی می باشد"),

    textarea: Yup.string()
        .min(4, "نظر شما نباید کمتر از ۴ کاراکتر باشد")
        .max(200, "نظر شما نباید بیشتر از ۲۰۰ کاراکتر باشد")
        .required("وارد کردن نظر الزامی می باشد"),
})

export default commentSchema