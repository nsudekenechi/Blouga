import React from 'react'
import { Logo } from '../components/Logo'
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom"
export const ForgotPasswordContainer = () => {
  const location = useLocation()
  const steps = [1, 2, 3, 4];
  const pathNames = ["", "/passwordReset"]
  const path = location.pathname.split("/forgotPassword")[1]
  const currentIndex = pathNames.findIndex((item)=> item == path)

  return (
    <div className='bg-black min-h-screen ' >


      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
          <div className='p-5'>
            <Logo textColor="text-[#fff]" logoColor={"#CDB932"} to={"/login"} />
          </div>
          <div className='py-5 px-5  md:py-10 md:px-20  font-[Ubuntu]'>
            <Outlet />
          </div>
        </div>

        <div className='relative  h-[100vh]'>
          <div className='absolute w-[100%] h-[100%]   z-10' style={{ background: "linear-gradient(to right,rgba(0,0,0,1) 10%,  rgba(0,0,0, 0.2))" }}>
          </div>
          <img src={"../../public/ForgotPasswordCover1.jpg"} alt="" className='w-[100%] h-[100%] object-cover object-center absolute ' />

          <div className='bottom-5 w-[100%]  flex justify-center items-center gap-x-5 absolute z-20'>
            {
              steps.map((step, index) => <div key={index} className={`rounded-full  ${index == currentIndex ? "text-[#000] bg-white w-9 h-9 " : "border border-white w-7 h-7 opacity-30 text-sm text-white"} flex justify-center items-center`}>{step}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
