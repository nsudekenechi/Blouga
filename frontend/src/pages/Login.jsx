import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineLockOpen } from "react-icons/md";
import { Link } from "react-router-dom"
export const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    focusedUsername: false,
    focusedPassword: false,
  })

  // Updating state when any input is been focused on
  const handleFocused = (e) => {
    setInputs({ ...inputs, focusedUsername: e.target.name == "username" && true, focusedPassword: e.target.name == "password" && true })
  }

  const handleBlur = (e) => {
    setInputs({ ...inputs, focusedUsername: e.target.name == "username" && false, focusedPassword: e.target.name == "password" && false })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 h-screen'>
      <div className='bg-black text-white py-5 px-5 md:px-6 lg:px-8'>
        <Link className='flex items-center gap-x-2 text-2xl mb-16 font-[Ubuntu]'><PiGithubLogoFill color='#CDB932' /> Blouga</Link>
        <h1 className='text-xl mb-5 font-[Nunito]'>Sign In</h1>
        <form action="" className=''>
          <div className="flex flex-col gap-y-5 font-[Ubuntu]">
            <div className={`duration-500 ease-linear ${inputs.focusedUsername ? "opacity-100 " : "opacity-30 "} text-sm`}>
              <label htmlFor="" className=''>Username</label>
              <div className={` flex items-center gap-x-2 border mt-3 p-4 `}>
                <HiOutlineMail color={'CDB932'} />
                <input type="text" className='m-0 p-0 bg-transparent outline-none w-[100%]' placeholder='Enter Username Or Email' name='username' onFocus={handleFocused} onBlur={handleBlur} style={{ caretColor: "#CDB932" }} />

              </div>
            </div>

            <div className={` duration-500 ease-linear ${inputs.focusedPassword ? "opacity-100 " : "opacity-30 "} text-sm`}>
              <label htmlFor="" className=''>Password</label>
              <div className={` flex items-center gap-x-2 border mt-3 p-4 `}>
                <MdOutlineLockOpen color={'CDB932'} />
                <input type="password" className='bg-transparent outline-none w-[100%]' placeholder='Enter Password' name='password' onFocus={handleFocused} onBlur={handleBlur} style={{ caretColor: "#CDB932" }} />

              </div>

            </div>
            <Link to={""} className='opacity-30 hover:opacity-100 text-sm'>Forgot Password</Link>

            <button className=' bg-[#CDB932] text-sm p-3 rounded-md mt-10 mb-7'>SIGN IN</button>

            <Link to={""} className='text-xs'>Don't have an account? Sign up</Link>
          </div>
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
