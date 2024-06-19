import BlogInfos from "./Pages/BlogInfos/BlogInfos";
import Blogs from "./Pages/Blogs/Blogs";
import Index from "./Pages/Index/Index";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const routes = [
    {path:"/", element: <Index />},
    {path:"/blogs", element: <Blogs />},
    {path:"/blogs/:blogName", element: <BlogInfos />},
    {path:"/contact-us", element: <ContactUs />},
    {path:"/about-us", element: <AboutUs />},
    {path:"/login", element: <Login />},
    {path:"/Register", element: <Register />},
    // {path:"/cart", element: <Cart />},
]

export default routes