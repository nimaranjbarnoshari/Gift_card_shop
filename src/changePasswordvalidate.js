import * as Yup from "yup"

const changePasswordSchema = Yup.object().shape({

    password: Yup.string()
        .min(8, "رمز عبور نباید کمتر از ۸ کاراکتر باشد")
        .max(20, "رمز  عبور نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("وارد کردن رمز عبور الزامی می باشد"),

    newPassword: Yup.string()
        .min(8, "رمز عبور  جدید نباید کمتر از ۸ کاراکتر باشد")
        .max(20, "رمز  عبور جدید نباید بیشتر از ۲۰ کاراکتر باشد")
        .required("وارد کردن رمز عبور جدید الزامی می باشد"),

    repeatPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], "تکرار رمز عبور جدید منطبق نیست")
        .required("وارد کردن تکرار رمز عبور  جدید الزامی می باشد")

})

export default changePasswordSchema