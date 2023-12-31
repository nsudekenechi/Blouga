import React from 'react'
import { Logo } from '../components/Logo'
import { IoFingerPrintSharp } from "react-icons/io5";
import { BiLeftArrowAlt } from "react-icons/bi";

import { Link } from 'react-router-dom';
export const ForgotPasswordContainer = ({children}) => {
  const steps = [1, 2, 3, 4]
  return (
    <div className='bg-black min-h-screen ' >


      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
          <div className='p-5'>
            <Logo textColor="text-[#fff]" logoColor={"#CDB932"} to={"/login"} />
          </div>
          <div className='py-5 px-5  md:py-10 md:px-20 '>
            {children}
          </div>
        </div>

        <div className='relative  h-[100vh]'>
          <div className='absolute w-[100%] h-[100%]   z-10' style={{ background: "linear-gradient(to right,rgba(0,0,0,1) 10%,  rgba(0,0,0,.2))" }}>
          </div>
          <img src="./ForgotPasswordCover1.jpg" alt="" className='w-[100%] h-[100%] object-cover object-center absolute ' />

          <div className='bottom-5 w-[100%]  flex justify-center items-center gap-x-5 absolute z-20'>
            {
              steps.map((step, index) => <div key={index} className={`rounded-full text-white ${index == 0 ? "text-[#000] bg-white w-9 h-9 " : "border border-white w-7 h-7 opacity-30 text-sm"} flex justify-center items-center`}>{step}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
