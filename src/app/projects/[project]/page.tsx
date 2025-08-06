'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProjectDetails, projects } from '../../utils/projects';

export default function Project() {
  const {project} = useParams();
  const [loading, setLoading] = useState(true);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>(undefined);
  useEffect(()=>{
    setProjectDetails(_=>{ 
      setLoading(false); 
      return projects.find(x=>x.projectURL===project)
    });

  },[])

  return (
    projectDetails !==undefined ?
    <div className='flex flex-col w-screen overflow-hidden h-fit items-center p-5'>
      <div className='flex text-2xl'>
        {projectDetails.projectName}
      </div>
      <div className='flex flex-col w-screen h-screen overflow-y-auto overscroll-contain p-5 '>
        <div className='flex w-full h-screen bg-zinc-200 shrink-0'>
        </div>
        <div className='flex w-full h-screen bg-zinc-300 shrink-0 shadow-2xl z-10 shadow-zinc-400 shadow-[]' />
        <div className='flex w-full h-20 shrink-0'/>
      </div>

    </div>
    :
      loading ? 
        <div>Loading...</div> :
        <div>Project Not found</div>
  )
}
