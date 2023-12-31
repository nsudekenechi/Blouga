import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/login"
import { ForgotPassword } from "../pages/ForgotPassword"
export const Routes = createBrowserRouter([
    {
        path: "",
        element: ""
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "forgotPassword",
        element: <ForgotPassword />
    }
]) 
