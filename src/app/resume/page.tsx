import React from 'react'
import { repoName } from '../../../next.config'
export default function Resume() {
  return (
    <div className='flex w-screen h-screen border-2'>
        <title>Resume</title>
        <iframe className='flex w-full h-full decoration-0' src={`${repoName}/Tirth_resume_cs.pdf`}/>
    </div>
  )
}
