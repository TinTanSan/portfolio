'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ProjectDetails, projects } from '../../utils/projects';
import Link from 'next/link';

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
   useEffect(()=>{
      if (projectDetails !== undefined){
        const observer = new IntersectionObserver(
        (entries)=>{
          entries.forEach(entry=>{
          if (entry.isIntersecting){
            entry.target.classList.add('zoom-in-div-in-view')
            entry.target.classList.remove('zoom-in-div')
          }else{
            entry.target.classList.remove('zoom-in-div-in-view')
            entry.target.classList.add('zoom-in-div')
          }
        })}, 
        
        { 
          threshold: 0.25
        }
      )
        
      const inspirationElem = document.getElementById("inspiration");  
      const challengesElem = document.getElementById("challenges");
      const progressElem = document.getElementById("progress")
      console.log(inspirationElem)
      console.log(challengesElem)
      console.log(progressElem)
      observer.observe(inspirationElem);
      observer.observe(challengesElem);
      observer.observe(progressElem);
      }
    
    },[projectDetails])

  return (
    projectDetails !==undefined ?
    <div className='flex flex-col w-screen overflow-hidden h-fit items-center p-5'>
      
      <div className='flex text-2xl justify-between w-full'>
        <div className='flex w-fit h-fit'>
          <Link className='flex bg-primary hover:bg-primary-hover text-primary-content w-28 justify-center items-center rounded-lg h-9 text-lg' href={"/"}>Home</Link>
        </div>
        <div>{projectDetails.projectName}</div>
        <div></div>
      </div>
      <div  className='flex relative flex-col w-screen h-screen overflow-y-scroll overscroll-contain p-5 rounded-lg'>
        <div id='inspiration' className='flex relative w-full h-screen bg-zinc-200 shrink-0 rounded-lg'>
          inspiration
        </div>

        <div id='challenges' className='flex w-full relative rounded-lg h-screen bg-zinc-300 shrink-0 shadow-2xl z-10 border-2 border-base-300 -top-5 shadow-zinc-400 shadow-[]'>
          challenges
        </div>
        
        <div id='progress' className='flex w-full h-1/2 shrink-0'>
          Progress
        </div>
      </div>

    </div>
    :
      loading ? 
        <div>Loading...</div> :
        <div>Project Not found</div>
  )
}