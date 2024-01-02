import React, { useEffect, useRef, useState } from 'react'
import { LuMailOpen } from "react-icons/lu";
import { useForgotPassword } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { motion } from "framer-motion"
export const PasswordReset = () => {
  const { err, loading, validateCode } = useForgotPassword()
  const [toggleInput, setToggleInput] = useState(false)
  const { email } = JSON.parse(sessionStorage.getItem("forgotPassword"))
  const [code, setCode] = useState({
    inputs: [
      { name: "input1", value: "", ref: useRef() },
      { name: "input2", value: "", ref: useRef() },
      { name: "input3", value: "", ref: useRef() },
      { name: "input4", value: "", ref: useRef() },
    ],
    enteredCode: ""
  })

  // Concatnating strings from individual inputs
  useEffect(() => {
    let concatInput = ""
    code.inputs.forEach(input => {
      concatInput += input.value
    })
    setCode({ ...code, enteredCode: concatInput })
  }, [code.inputs])
  const handleToggleInput = () => {
    setToggleInput(true)
    setTimeout(() => setToggleInput(false), 2000)
  }
  useEffect(() => {
    if (err) {
      handleToggleInput()
    }
  }, [err])
  const handleChange = (e, input) => {
    let exp = /[a-zA-Z\s]/
    // Allowing only numbers
    if (!exp.test(e.target.value) && !/[^a-zA-Z0-9]/.test(e.target.value)) {
      setCode((prev) => ({ ...prev, inputs: code.inputs.map(item => item.name == input.name ? { ...input, value: e.target.value } : item) }))

      // Focusing on next inputs
      let nextIndex = code.inputs.findIndex(item => item.name == input.name) + 1;
      if (nextIndex < code.inputs.length && e.target.value != "") code.inputs[nextIndex].ref.current.focus()
    }

  }
  return (
    <>
      <div className=' w-fit text-white text-xl border border-white p-3 rounded-md'>
        <LuMailOpen />
      </div>

      <h1 className='text-2xl text-white mt-5 '>Password Reset</h1>
      <p className='text-[#777] text-sm'>We sent a code to <b>{email}</b></p>

      <form className='' action="" onSubmit={(e) => {
        e.preventDefault()
        if (code.enteredCode.length == 4) {
          validateCode(code.enteredCode)
        } else {
          handleToggleInput()
        }

      }}>
        <div className='grid grid-cols-4 gap-x-5 pt-10'>
          {
            code.inputs.map((input, index) => <motion.div className={`  duration-500  flex justify-center p-5 ${input.value == "" ? "opacity-40" : "opacity-100"}`} key={index}
              initial={{
                x: "0%",
                outline: "white solid "
              }}
              animate={{
                x: toggleInput && [0, -30, 50],
                outline: toggleInput ? "red  solid " : "white solid "
              }}
              transition={{
                repeat: "Infinity",
              }}
            >
              <input type="text" className={`bg-transparent w-[100%] outline-none  text-center text-3xl caret-[#CDB932] text-white`}
                maxLength={1} name={input.name} onChange={(e) => handleChange(e, input)} ref={input.ref} value={input.value} />
            </motion.div>)
          }
        </div>
        <span className='text-xs text-red-500'>{err}</span>
        <button className=' py-2 bg-white w-[100%] rounded-sm  text-[#000] my-5 relative'>{loading ? <span className='loading loading-spinner  loading-xs'></span> : "Continue"}</button>
        <p className='text-xs text-center text-white'>Didn't receive an email?  <b className='text-[#CDB932] cursor-pointer'>Click to resend</b></p>

        {/* <div className='flex justify-center items-center mt-5'>
          <Link className='text-sm flex justify-center items-center   rounded-lg  text-white' to={"/login"}><BiLeftArrowAlt size={20} /> Back to login</Link>
        </div> */}
      </form>
    </>
  )
}
