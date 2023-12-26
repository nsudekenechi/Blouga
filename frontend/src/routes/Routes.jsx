import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/login"
export const Routes = createBrowserRouter([
    {
        path: "",
        element: ""
    },
    {
        path:"login",
        element:<Login/>
    }
]) 
