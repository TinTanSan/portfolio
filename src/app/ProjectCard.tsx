import React from 'react'
import { ProjectDetails } from './page'
import Image from 'next/image'
// component for a project

type props = {
    projectDetails: ProjectDetails
}
export default function ProjectCard({projectDetails}:props) {
  return (
    <div className='flex flex-col w-full md:w-1/2 lg:w-[40%] border-2 shrink-0 grow-0 bg-base-100 border-base-300 text-base-content shadow-lg h-1/2 rounded-lg gap-5 p-2'>
        <div className='flex w-full h-fit justify-center text-xl font-bold'>{projectDetails.projectName}</div>
        <div className='flex flex-col w-full h-full'>
            <div className='flex w-full h-full'>{projectDetails.projectOverview}</div>
            <div className='flex w-full h-fit items-center justify-between'>
              <div className='flex gap-2 w-full items-center'>
                <div>Tech Stack:</div>
                <div className='flex gap-2 lg:gap-5 h-fit w-fit'>
                  {projectDetails.techUsed.map((x, i)=><Image key={i} src={"/"+x+ ".svg"} width={35} height={35} alt={x}/>)}
                </div>
              </div>
              <button className='bg-neutral text-neutral-content px-2 rounded-lg  items-center justify-center flex text-nowrap w-24 h-8'>
                Read more
              </button>
            </div>
        </div>
    </div>
  )
}
