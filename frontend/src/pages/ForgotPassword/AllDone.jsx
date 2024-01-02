import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import { VscThumbsupFilled } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
export const AllDone = () => {
  const navigate = useNavigate()
  const continueToLogin = () => {
    sessionStorage.removeItem("forgotPassword")
    navigate("/login")
  }
  return (
    <>
      <div className='w-fit text-white text-xl border border-white p-3 rounded-md'>
        <VscThumbsupFilled />
      </div>
      <h1 className='text-3xl text-white mt-5 mb-3 '>All Done!</h1>
      <p className='text-[#ccc] text-lg'>Your password has been  reset. Please proceed to the login page to continue with the new password.</p>
      <button onClick={continueToLogin} className='bg-white flex justify-center items-center mt-5 p-3 w-[100%]'>
        <span className='text-sm flex justify-center items-center text-center   rounded-lg  text-black' >Continue <BiRightArrowAlt size={20} /></span>
      </button>
    </>
  )
}
