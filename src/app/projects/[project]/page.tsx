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
    <div className='flex flex-col w-screen h-fit items-center p-5'>
      <div className='flex text-2xl'>
        {projectDetails.projectName}
      </div>
      <div className='flex flex-col w-screen'>

      </div>

    </div>
    :
    loading ? <div>Loading...</div> : <div>Project Not found</div>
  )
}
