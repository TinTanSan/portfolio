import React from 'react'
import { ExperienceDetails } from '../utils/experiences'


type props = {
    experience: ExperienceDetails
}


export default function Experience({experience}: props) {
  return (
    <div className="flex flex-col border-2 border-base-300 rounded-lg px-2 items-center p-2">
        <div className="flex flex-col md:flex-row text-lg md:text-2xl font-bold w-full items-center md:justify-between">
            <div>
                {experience.title}
            </div>
            <div className='flex text-sm md:text-xl'>
                {experience.company}
            </div>
        </div>
        <div className='flex w-3/4 md:w-[98%] h-0.5 bg-base-200 gap-5' />
        <div className="text-xs md:text-sm flex w-full">{experience.duration} | {experience.location}</div>
        <div className="flex flex-wrap grow shrink text-[0.8rem] md:text-[0.95rem] text-wrap">
            {experience.overview}
        </div>
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full text-[0.8rem] md:text-[1rem]'>Contributions</div>
            {experience.contributions.map((contribution, j)=>{
                return (
                    <ul key={j} className='flex flex-col list-inside'>
                        <h3 className='flex font-bold pl-2 text-[0.8rem] md:text-lg'>{contribution.title}</h3>
                        {contribution.details.map((detail, k)=>
                            <div key={k} className='flex gap-1 pl-5 text-[0.75rem] md:text-[0.95rem]'>
                                -
                                <li className='flex'>
                                    {detail}
                                </li>
                            </div>
                        )}
                    </ul>
                )
            })}
        </div>
    </div>
  )
}
