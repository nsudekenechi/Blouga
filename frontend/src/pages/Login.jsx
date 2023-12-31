import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineLockOpen } from "react-icons/md";
import { Link } from "react-router-dom"
import * as yup from "yup"
import { animateInput, validateForm } from '../hooks/auth';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Creating schema for formvalidation
  const schema = yup.object({
    username: yup.string().required("Username cannot be empty"),
    password: yup.string().min(5, "Password must contain atleast 5 characters").required("Password cannot be empty")
  })
  // Custom hook that validates form
  const { errors, handleSubmit, register, submit, loading, customErr } = validateForm(schema)
  const { handleBlur, handleFocused, inputs } = animateInput({ username: false, password: false })

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 h-screen'>
      <div className='bg-black text-white py-5 px-5 md:px-6 lg:px-8'>
        <Link className='flex items-center gap-x-2 text-2xl mb-10 font-[Ubuntu]'><PiGithubLogoFill color='#CDB932' /> Blouga</Link>
        <h1 className='text-xl mb-5 font-[Nunito]'>Sign In</h1>
        <form className="flex flex-col gap-y-5 font-[Ubuntu]" onSubmit={handleSubmit((data) => submit("users/login", data))}>

          <div className={`duration-500 ease-linear ${inputs.username ? "opacity-100 " : "opacity-30 "} text-sm relative`}>
            <label htmlFor="" className=''>Username</label>
            <div className={` flex items-center gap-x-2 border mt-3 p-4 `}>
              <HiOutlineMail color={'CDB932'} />
              <input type="text" className='m-0 p-0 bg-transparent outline-none w-[100%]' placeholder='Enter Username Or Email' name='username' onFocus={handleFocused} onBlur={handleBlur} style={{ caretColor: "#CDB932" }} {...register("username")} />

            </div>
            <span className='text-red-500 text-xs absolute'>{errors?.username?.message}</span>
          </div>

          <div className={` duration-500 ease-linear ${inputs.password ? "opacity-100 " : "opacity-30 "} text-sm relative`}>
            <label htmlFor="" className=''>Password</label>
            <div className={` flex justify-between items-center gap-x-2 border mt-3 p-4 `}>
              <MdOutlineLockOpen color={'CDB932'} />
              <input type={!showPassword ? "password" : "text"} className='bg-transparent outline-none w-[100%]' placeholder='Enter Password' name='password' onFocus={handleFocused} onBlur={handleBlur} style={{ caretColor: "#CDB932" }} {...register("password")} />
              <span className='cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
                {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <span className='text-red-500 text-xs absolute'>{errors?.password?.message}</span>
          </div>
          <Link to={"/forgotPassword"} className='opacity-30 hover:opacity-100 text-sm'>Forgot Password</Link>
          <div className='flex flex-col gap-y-3 mt-7'>
            <span className='text-red-500 text-xs'>{customErr}</span>

            <button className=' bg-[#CDB932] text-sm p-3 rounded-md  mb-7'>{loading ? <span className='loading loading-spinner'></span> : "Sign In"}</button>
          </div>

          <Link to={""} className='text-xs'>Don't have an account? Sign up</Link>
        </form>
      </div>
      <div className='relative col-span-2 bg-cover bg-center py-28 px-40' style={{
        background: "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,.2) 50%), url(https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg)"
      }} >
        <h1 className='text-white text-lg'>A new way to experience and connect to unique voices and perspectives that matters to <span className='bg-[#CDB932] px-2 py-1 rounded-full'>you.</span> </h1>

        <div>

        </div>
      </div>
    </div>
  )
}
