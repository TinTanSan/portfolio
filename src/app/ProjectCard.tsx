import React from 'react'
import { ProjectDetails } from './page'
import Image from 'next/image'
// component for a project

type props = {
    projectDetails: ProjectDetails
}
export default function ProjectCard({projectDetails}:props) {
  return (
    <div className='grid row-span-1 col-span-1 grid-flow-row-dense grid-rows-5 grid-cols-1 bg-base-100  border-2 border-base-300 text-base-content shadow-lg rounded-lg gap-5 p-2'>
        <div className='grid row-span-1 w-full h-fit justify-center text-xl font-bold'>{projectDetails.projectName}</div>
        <div className='grid row-span-4 grid-rows-5 w-full h-full'>
            <div className='grid row-span-4 w-full h-100 md:h-full overflow-hidden overflow-ellipsis'>{projectDetails.projectOverview}</div>
            <div className='grid grid-flow-col-dense grid-cols-1 grid-rows-2  md:row-span-1 md:grid-flow-col-dense md:grid-cols-4 md:grid-rows-1 w-full justify-between gap-2'>
              <div className='grid col-span-full row-span-1 grid-rows-1 grid-cols-4 md:col-span-3 md:grid-cols-4 md:grid-flow-col-dense  w-full gap-10 items-center'>
                <div className='grid col-span-1 text-nowrap w-fit '>Tech Stack:</div>
                <div className='grid grid-flow-col-dense grid-cols-subgrid items-center col-span-3 lg:gap-3 h-fit w-full overflow-x-auto'>
                  {projectDetails.techUsed.map((x, i)=><Image key={i} src={"/"+x+ ".svg"} width={35} height={35} alt={x}/>)}
                </div>
              </div>
              <div className='grid row-span-1 col-span-full md:col-span-1 w-full h-full items-center'>
                <button className='bg-neutral text-neutral-content px-2 rounded-lg  items-center justify-center grid col-span-1 text-nowrap w-full md:w-24 h-10'>
                  Read more
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}
