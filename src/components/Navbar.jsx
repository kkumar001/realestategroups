import React from 'react'
import { regrouplogo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-[64px] flex items-center justify-evenly bg-[#d4b8a7]'>
            <Link to='/'>
                <img src={regrouplogo} className='h-[48px]' alt="" />
            </Link>
            <h3 className='text-[32px] font-bold sm:flex hidden'>Real Experts Group</h3>
        </div>
    )
}

export default Navbar