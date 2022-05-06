import Page2 from "../pages/page2";
import Page1 from "../pages/page1";

import { Navigate } from "react-router-dom";

export const routes = [
    {path:'/', element: <Navigate to='/page1'/>},
    {path:'/page1', element: <Page1/>},
    {path:'/page2', element: <Page2/>},
]