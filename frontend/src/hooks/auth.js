import { GET, POST } from "../api/api"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Store } from "../store/context"
import { useNavigate } from "react-router-dom"
const yupHandlers = (schema) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return {
        register, handleSubmit, errors
    }
}
export const validateForm = (schema) => {
    const { store, setStore } = useContext(Store)
    const [loading, setLoading] = useState(false)
    const [customErr, setCustomErr] = useState("")
    const submit = (url, data) => {
        setLoading(true)
        POST(url, data, {}).then(res => {
            // Storing user results globally
            setStore({ ...store, user: res })
        }).catch(err => {
            setCustomErr(err.response.data)
            // console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return {
        ...yupHandlers(schema),
        submit,
        loading,
        customErr
    }
}

export const animateInput = (inputs_data) => {
    const [inputs, setInputs] = useState(inputs_data)

    // Updating state when any input is been focused on
    const handleFocused = (e) => {
        setInputs({ ...inputs, [e.target.name]: true })
    }

    const handleBlur = (e) => {
        setInputs({ ...inputs, [e.target.name]: false })
    }

    return {
        handleFocused,
        handleBlur,
        inputs
    }
}

export const useForgotPassword = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState("")
    const generateCode = () => {
        const character = "0123456789"
        let code = ""
        for (let i = 1; i <= 4; i++) {
            code += character[Math.floor(Math.random() * character.length)]
        }
        return code
    }
    const validateEmail = (email) => {
        // Validating email
        if (!email) {
            setErr("Email is required")
            return
        }
        setLoading(true)
        POST("forgotPassword", { email, code: generateCode() }).then(res => {
            sessionStorage.setItem("forgotPasswordEmail", email)
        }).catch(err => {
            console.error(err)
            setErr(err.response.data)
        }).finally(() => {
            setTimeout(() => {
                setLoading(false)
                navigate("passwordReset")
            }, 100)
        })

    }

    const validateCode = (code) => {

        setLoading(true)
        POST("forgotPassword/validate", { code }, {}).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
            setErr(err.response.data)
        }).finally(() => {
            setLoading(false)
        })
    }

    const resetPassword = (newPassword) => {

    }
    return {
        validateEmail,
        validateCode,
        loading,
        err
    }
}