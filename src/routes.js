import BlogInfos from "./Pages/BlogInfos/BlogInfos";
import Blogs from "./Pages/Blogs/Blogs";
import Index from "./Pages/Index/Index";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import OTP from "./Pages/OTP/OTP";
import Carts from "./Pages/Carts/Carts";
import GiftCards from "./Pages/GiftCards/GiftCards";
import Games from "./Pages/Games/Games";
import Services from "./Pages/Services/Services";
import Softwares from "./Pages/Softwares/Softwares";

const routes = [
    {path:"/", element: <Index />},
    {path:"/blogs", element: <Blogs />},
    {path:"/blogs/:blogName", element: <BlogInfos />},
    {path:"/contact-us", element: <ContactUs />},
    {path:"/about-us", element: <AboutUs />},
    {path:"/login", element: <Login />},
    {path:"/Register", element: <Register />},
    {path:"/otp", element: <OTP />},
    {path:"/carts", element: <Carts />},
    {path:"/gift-cards", element: <GiftCards />},
    {path:"/games", element: <Games />},
    {path:"/services", element: <Services />},
    {path:"/softwares", element: <Softwares />},
]

export default routes