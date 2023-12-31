import { GET, POST } from "../api/api"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Store } from "../store/context"
export const validateForm = (schema) => {
    const { store, setStore } = useContext(Store)
    const [loading, setLoading] = useState(false)
    const [customErr, setCustomErr] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
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
        handleSubmit,
        register,
        submit,
        loading,
        errors,
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