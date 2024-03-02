import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/Search';
import { Data } from '../Data/Details'
import { Link } from 'react-router-dom'
import { man, woman } from '../assets'

export const Home = () => {
    const [status, setStatus] = useState('');
    const [data, setData] = useState('');

    const getPincode = (pincode) => {
        console.log(pincode);
        setStatus('');
        getData(pincode);
    }

    const getData = (pincode) => {
        const matchedCode = Data.pin_codes.find(code => code.pin_code === pincode);
        setData(matchedCode ? matchedCode : setStatus("No Result Found"));
    }

    console.log(data);

    return (
        <div className='w-full min-h-[100vh]'>
            <Navbar />
            <div className='w-full flex items-center justify-center p-4 bg-[#d9d7d5]'>
                <h3 className='text-[40px] text-center font-medium'>Your real estate broker is now more <br />
                    <span className='font-bold'>Professional, tech-savvy and trustworthy</span>
                </h3>
            </div>
            <div className='w-full flex flex-col p-4 items-center text-center'>
                <p className='text-[32px]'>Search for Partnered Real Estate Agents</p>
                <p className='font-thin'>Availabe Pincodes <FontAwesomeIcon icon={faArrowRight} /> 110001, 400001, 281001</p>
                <Search onPincodeChange={getPincode} />
            </div>
            <div className='w-full p-2 flex flex-col gap-6 items-center justify-center my-4'>
                {data ? <h6 className='text-[32px]'>Results of Pincode : <span className='font-semibold'>{data.pin_code}</span></h6> : ''}
                <div className='w-full flex sm:flex-row flex-col sm:gap-10 gap-3 items-center justify-center min-h-[300px] bg-[#bc8966] rounded-3xl p-3'>
                    {data ?
                        data.partnered_agents.map((partner) => (
                            <Link to={`/details/${partner.id}`} key={partner.name} className='sm:w-[40%] w-[100%] hover:text-[#bc8966] transition-all hover:h-[280px] hover:w-[45%] duration-300 ease-in-out p-4 text-center h-[250px] flex flex-col gap-2 justify-center items-center bg-white rounded-3xl'>
                                <img src={partner.profile_picture === 'man' ? man : woman } alt="man" className='h-[100px] rounded-3xl' />
                                <p className='text-[24px] font-semibold'>{partner.name}</p>
                                <p className='text-[16px] font-semibold'>{partner.description}</p>
                            </Link>))
                        :
                        <h3 className='text-center text-[32px] font-bold uppercase text-white'>{status ? `${status}` : 'Search Result Appears Here'}</h3>}
                </div>
            </div>
        </div>
    )
}
