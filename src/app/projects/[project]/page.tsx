

import React from 'react'
import { ProjectDetails, projects } from '../../utils/projects';
import Link from 'next/link';
export async function generateStaticParams() {
  return [{ project: 'aes_gcm' }, { project: 'the_money_game' }, { project: 'password_manager' }];
}

export default async function Project({ params }: { params: Promise<{ project: string }> }) {
  const param = (await params).project.toString()
  const projectDetails:ProjectDetails | undefined = projects.find((x)=>x.projectURL === param);
  return (
    projectDetails !==undefined ?
    <div className='flex flex-col w-screen h-screen items-center p-2 md:p-5 gap-2'>
      {/* navigation bar */}
      <div className='flex text-2xl justify-center h-[5vh] w-full'>
        <div className='flex w-fit h-fit absolute left-2 md:left-5'>
          <Link className='flex bg-primary hover:bg-primary-hover text-primary-content w-20 md:w-28 justify-center items-center rounded-lg h-9 text-[1rem] md:text-lg' href={"/"}>Home</Link>
        </div>
        <div>{projectDetails.projectName}</div>
        <div className='flex' id='spacer'/>
      </div>

      <div className='flex md:flex-row flex-col w-full h[92vh] pb-2 md:h-full gap-2 md:gap-5 overflow-y-auto'>
        {/* inspiration + progress */}
        <div className='flex flex-col w-full h-full gap-2 md:gap-5'>
          <div className='bg-base-200 w-full h-full md:h-full border-2 border-base-300 shadow-lg rounded-xl flex flex-col gap-2 p-2 overflow-hidden'>
            <h1 className='flex w-full justify-center text-xl'>Inspiration</h1>
            <div className='flex text-wrap w-full text-sm md:text-lg'>
            {projectDetails.projectInspriation}
            </div>
          </div>
          <div className='flex flex-col bg-base-200 w-full h-fit md:h-full border-2 border-base-300 shadow-lg rounded-xl gap-2 p-2'>
            <h1 className='flex w-full justify-center text-xl'>Progress</h1>
            <div className='flex text-wrap w-full text-sm md:text-lg'>
              {projectDetails.currentProgress}
            </div>
          </div>
        </div>
        {/* challenges */}
        <div className='flex flex-col w-full h-fit md:h-full  bg-base-200 border-base-300 shadow-lg border-2 rounded-xl p-2'>
          <h1 className='flex w-full justify-center text-xl'>Challenges</h1>
          <div className='flex flex-col list-inside text-wrap w-full text-sm md:text-lg'> 
          <ol className='pl-5 list-disc'>
            {projectDetails.projectChallenges.map((challenge, i)=>
              <li className='list-outside' key={i}>{challenge}</li>
            )}
          </ol>
          </div>
        </div>
      </div>

    </div>
    :
    <div>Project Not found</div>
  )
}