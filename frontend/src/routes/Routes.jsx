import { createBrowserRouter, Navigate } from "react-router-dom"
import { Login } from "../pages/Login"
import { ForgotPasswordContainer } from "../pages/ForgotPassword/ForgotPasswordContainer"
import { PasswordReset } from "../pages/ForgotPassword/PasswordReset"
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword"
import { NewPassword } from "../pages/ForgotPassword/NewPassword"
import { AllDone } from "../pages/ForgotPassword/AllDone"
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
            },
            {
                path: "newPassword",
                element: <NewPassword />
            },
            {
                path: "allDone",
                element: <AllDone />
            }
        ]
    }
]) 
