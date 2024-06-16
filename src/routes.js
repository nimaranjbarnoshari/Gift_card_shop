import Blogs from "./Pages/Blogs/Blogs";
import Index from "./Pages/Index/Index";

const routes = [
    {path:"/", element: <Index />},
    {path:"/blogs", element: <Blogs />},
    // {path:"/", element: <Index />},
    // {path:"/", element: <Index />},
    // {path:"/", element: <Index />},
]

export default routes