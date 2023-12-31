import React from 'react'
import { PiGithubLogoFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export const Logo = ({ logoColor, textColor, to }) => {
    return (
        <>
            <Link className={`flex items-center gap-x-2 text-2xl  font-[Ubuntu] ${textColor}`} to={to}><PiGithubLogoFill color={logoColor} /> Blouga</Link>
        </>
    )
}
