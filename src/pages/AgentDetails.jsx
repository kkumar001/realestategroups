import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { man, woman } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Data } from '../Data/Details'

const AgentDetails = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState('');

  const getAgent = () => {
    const matchedCode = Data.pin_codes.find((code) => code.pin_code === id.slice(0, id.length - 1));
    const agent = matchedCode.partnered_agents.find((pagent) => pagent.id === id);
    setAgent(agent);
  }

  console.log(agent);

  useEffect(() => getAgent());

  return (
    <div className='w-full h-[100vh]'>
      <Navbar />
      <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center'>
        <div className='w-[95%] max-w-[800px] min-h-[400px] bg-white rounded-3xl flex flex-col p-2'>
          <div className='w-full h-[64px] bg-[#bc8966] rounded-3xl text-white sm:text-[40px] text-[32px] font-semibold flex items-center justify-center'>
            <h3>Agent in {id.slice(0, id.length - 1)}</h3>
          </div>
          <div className='w-full flex flex-col items-center gap-4 p-2 text-[#bc8966]'>
            <div className='flex w-full p-2 justify-center sm:flex-row flex-col items-center gap-2'>
              <img src={agent.profile_picture === 'man' ? man : woman} className='h-[150px] sm:w-[25%]' alt="" />
              <div className='flex gap-2 sm:w-[70%] flex-col h-full justify-center text-[28px]'>
                <p className='flex items-center gap-2'><span className='font-bold'>{agent.name}</span></p>
                <p className='flex items-center gap-2'>Team Members <FontAwesomeIcon icon={faArrowRight} /><span className='font-bold'>{agent.team_members}</span></p>
                <p className='flex items-center gap-2'>Rating <FontAwesomeIcon icon={faArrowRight} /><span className='font-bold'>{agent.team_members}</span></p>
              </div>
            </div>
            <div className='sm:w-full flex sm:flex-row flex-col justify-around gap-4 text-[28px] p-2'>
              <p className='flex items-center gap-2 font-bold'>Experience <FontAwesomeIcon icon={faArrowRight} />{agent.years_of_experience} yrs </p>
              <p className='flex items-center gap-2 font-bold'>City <FontAwesomeIcon icon={faArrowRight} />{agent.area_of_service} </p>
            </div>
            <p className='text-[24px] font-medium text-center' >{agent.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDetails