import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/login"
import {  ForgotPasswordContainer } from "../pages/ForgotPasswordContainer"
import { PasswordReset } from "../pages/PasswordReset"
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
        element: <ForgotPasswordContainer />,
        children: [
            {
                path: "",
                element: <ForgotPassword />
            },
            {
                path: "passwordReset",
                element: <PasswordReset />
            }
        ]
    }
]) 
