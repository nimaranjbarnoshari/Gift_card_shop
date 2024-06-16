import BlogInfos from "./Pages/BlogInfos/BlogInfos";
import Blogs from "./Pages/Blogs/Blogs";
import Index from "./Pages/Index/Index";

const routes = [
    {path:"/", element: <Index />},
    {path:"/blogs", element: <Blogs />},
    {path:"/blogs/:blogName", element: <BlogInfos />},
    // {path:"/cart", element: <Cart />},
    // {path:"/login", element: <Login />},
    // {path:"/Register", element: <Register />},
    // {path:"/contact-us", element: <ContactUs />},
]

export default routes