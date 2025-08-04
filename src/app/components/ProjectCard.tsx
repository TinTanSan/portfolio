'use client'
import React from 'react'

import Image from 'next/image'
import { ProjectDetails } from '../utils/projects'
// component for a project

type props = {
    projectDetails: ProjectDetails,
    id: string,
}
export default function ProjectCard({projectDetails, id}:props) {
    
  return (
    <div id={id} className='grid row-span-1 h-[75vh] col-span-1 grid-flow-row-dense grid-rows-9 grid-cols-1 bg-base-100  border-2 border-base-300 text-base-content shadow-xl rounded-lg gap-5 p-2 zoom-in-div'>
        <div className='grid row-span-1 w-full h-fit justify-center text-xl font-bold'>{projectDetails.projectName}</div>
        <div className='grid row-span-8 grid-rows-6 w-full h-full'>
            <div className='grid row-span-5 w-full h-full overflow-hidden overflow-ellipsis text-lg'>{projectDetails.projectOverview}</div>
            <div className='grid grid-flow-col-dense grid-cols-1 grid-rows-2 w-full justify-between'>
              <div className='grid col-span-full row-span-1 grid-rows-1 grid-cols-3 w-full items-center'>
                <div className='grid col-span-1'>Tech Stack:</div>
                <div className='grid grid-flow-col-dense items-center col-span-2 h-fit w-full overflow-x-auto'>
                  {projectDetails.techUsed.map((x, i)=><Image key={i} src={"/"+x+ ".svg"} width={35} height={35} alt={x}/>)}
                </div>
              </div>
              <div className='grid row-span-1 col-span-1 items-center'>
                <button className='bg-neutral hover:bg-neutral-hover text-neutral-content px-2 rounded-lg  items-center justify-center text-nowrap w-full h-10'>
                  Read more
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}
