import React from 'react'
import { Logo } from '../components/Logo'
import { IoFingerPrintSharp } from "react-icons/io5";
import { BiLeftArrowAlt } from "react-icons/bi";

import { Link } from 'react-router-dom';
export const ForgotPassword = () => {
  const steps = [1, 2, 3, 4]
  return (
    <div className='bg-black min-h-screen ' >


      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
          <div className='p-5'>
            <Logo textColor="text-[#fff]" logoColor={"#CDB932"} to={"/login"} />
          </div>
          <div className='py-5 px-5  md:py-10 md:px-20 '>
            <div className='w-fit text-white text-xl border border-white p-3 rounded-md'>
              <IoFingerPrintSharp />
            </div>
            <h1 className='text-2xl text-white mt-5 '>Forgot Password?</h1>
            <p className='text-[#777] text-sm'>No worries, reset instructions will be sent to you.</p>
            <form action="" className='py-5 font-[Ubuntu]'>
              <input type="email" placeholder='Enter your email' className='w-[100%] bg-transparent border-0 border-b outline-none py-3 text-[#CDB932] mb-10' />
              <button className='py-3 bg-white w-[100%] rounded-lg  text-[#CDB932] mb-10'>Reset Password</button>

              <Link className='flex justify-center items-center   w-[100%] rounded-lg  text-white' to={"/login"}><BiLeftArrowAlt size={20} /> Back to login</Link>
            </form>
          </div>
        </div>

        <div className='relative  h-[100vh]'>
          <div className='absolute w-[100%] h-[100%]   z-10' style={{ background: "linear-gradient(to right,rgba(0,0,0,1) 10%,  rgba(0,0,0,.2))" }}>
          </div>
          <img src="./ForgotPasswordCover1.jpg" alt="" className='w-[100%] h-[100%] object-cover object-center absolute ' />

          <div className='bottom-5 w-[100%]  flex justify-center items-center gap-x-5 absolute z-20'>
            {
              steps.map((step, index) => <div key={index} className={`rounded-full text-white ${index==0 ? "text-[#CDB932] bg-white w-9 h-9 ": "border border-white w-7 h-7 opacity-30 text-sm"} flex justify-center items-center`}>{step}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
