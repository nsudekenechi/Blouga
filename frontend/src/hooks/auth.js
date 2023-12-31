import { GET, POST } from "../api/api"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
export const validateForm = (schema) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors },setFocus } = useForm({
        resolver: yupResolver(schema)
    })

    const submit = (url, data) => {
        setLoading(true)
        POST(url, data, {}).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return {
        handleSubmit,
        register,
        submit,
        loading,
        errors
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