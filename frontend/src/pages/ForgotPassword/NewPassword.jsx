import React, { useState } from 'react'
import { MdOutlineLockPerson } from "react-icons/md";
import { useForgotPassword } from "../../hooks/auth"
export const NewPassword = () => {
  const { err, loading, resetPassword } = useForgotPassword()
  const [inputs, setInputs] = useState({
    password: "",
    confirmPassword: ""
  })
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='w-fit text-white text-xl border border-white p-3 rounded-md'>
        <MdOutlineLockPerson />
      </div>
      <h1 className='text-2xl text-white mt-5 '>Set New Password</h1>
      <p className='text-[#777] text-sm'>Must be at least 8 characters</p>

      <form onSubmit={(e) => {
        e.preventDefault();
        resetPassword(inputs.password)
      }} className='py-5 text-sm'>
        <div className='mb-10'>
          <p className='text-white'>Password</p>
          <input type="password" placeholder='Enter your password' className='w-[100%] bg-transparent border-0 border-b outline-none py-3 text-[#CDB932] placeholder:font-thin ' autoComplete='false' name='password' onChange={handleChange} />
        </div>

        <div>
          <p className='text-white'>Confirm Password</p>
          <input type="password" placeholder='Enter your password' className='w-[100%] bg-transparent border-0 border-b outline-none py-3 text-[#CDB932] placeholder:font-thin  ' autoComplete='false' onChange={handleChange} />
        </div>

        <button className=' py-2 bg-white w-[100%] rounded-sm  text-[#000] my-5 relative'>{"" ? <span className='loading loading-spinner  loading-xs'></span> : "Reset Password"}</button>
      </form>
    </>
  )
}
