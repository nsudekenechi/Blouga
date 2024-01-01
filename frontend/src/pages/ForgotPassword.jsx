import React, { useState } from 'react'
import { IoFingerPrintSharp } from "react-icons/io5";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useForgotPassword } from '../hooks/auth';

export const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const { validateEmail, loading, err } = useForgotPassword()
    return (
        <>
            <div className='w-fit text-white text-xl border border-white p-3 rounded-md'>
                <IoFingerPrintSharp />
            </div>
            <h1 className='text-2xl text-white mt-5 '>Forgot Password?</h1>
            <p className='text-[#777] text-sm'>No worries, reset instructions will be sent to you.</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                validateEmail(email)
            }} className='py-5 font-[Ubuntu]' >
                <input type="email" placeholder='Enter your email' className='w-[100%] bg-transparent border-0 border-b outline-none py-3 text-[#CDB932] ' autoComplete='false' onChange={(e) => setEmail(e.target.value)} value={email} />
                <span className='text-red-500 text-xs'>{err}</span>
                <button className=' py-3 bg-white w-[100%] rounded-lg  text-[#CDB932] my-10'>{loading ? <span className='loading loading-spinner '></span> : "Reset Password"}</button>

                <Link className='flex justify-center items-center   w-[100%] rounded-lg  text-white' to={"/login"}><BiLeftArrowAlt size={20} /> Back to login</Link>
            </form>
        </>
    )
}
