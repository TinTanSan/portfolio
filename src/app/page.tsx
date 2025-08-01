'use client'

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
export type ProjectDetails ={
  projectName: string,
  projectOverview: string,
  techUsed: Array<string>,
}
export default function Home() {

  const projects:Array<ProjectDetails> = [
    {
      projectName:"AES-GCM ",
      projectOverview: `A bare bones implementation of AES-GCM in Rust. For this project I used only the standard 
        library in rust.`,
      techUsed: ['rust'],
    },
    {
      projectName: "Password Manager",
      projectOverview: `A minimalist cross-platform desktop application built to serve my needs for a secure offline 
        password manager. Taking inspiration from KeePass I set out to create a password manager which would be simple to 
        use, with help along the way.`,
      techUsed: ['electron','typescript','tailwind'],
    }
  ]



  return (
    <div className="flex flex-col w-screen overflow-x-hidden h-full bg-base-200 text-base-content 2xl:text-xl gap-5">
      <title>Tirth Patel</title>
      {/* landing page (about me) */}
      <div className="flex flex-col p-5 w-screen h-screen text-wrap flex-wrap justify-center gap-5">
        <div className="flex text-4xl font-bold">
          About me
        </div>
        <div className="flex flex-col text-xl w-[75%] flex-wrap">
          I'm a curious and driven individual with a strong interest in technology, 
          problem-solving, and continuous learning. 
          <br />
          <div className="h-2" />
          With a background in Computer Science, I enjoy exploring how things work, 
          building creative solutions, and collaborating with others to bring ideas to life. 
          <br />
          <div className="h-2" />
          Whether I'm coding a new project, learning a new tool, or diving into a complex challenge, 
          I approach everything with a growth mindset and a desire to make a positive impact.
        </div>
        <div className="flex w-full h-fit">
        <Link target="_blank" className="flex w-fit px-5 rounded-lg border-2 bg-primary hover:bg-primary-hover text-primary-content h-10 items-center justify-center shadow-lg active:shadow-none" href={"/resume"}>Resume</Link>
          
        </div>
      </div>
      {/* projects */}
      <div className="flex flex-col gap-5 w-screen h-screen p-5">
        <div className="flex text-2xl md:text-3xl lg:text-4xl font-bold">Things I've worked on</div>
        <div className="flex gap-5 flex-col border-base-100 md:flex-row w-full h-full grow shrink-0 overflow-y-auto">
          {projects.map((x:ProjectDetails,i:number)=>
            <ProjectCard projectDetails={x} key={i.toString()}/>
          )}
        </div>
      </div>

      {/* Experience*/}
      <div className="flex flex-col w-screen h-screen">
          <div>Experience</div>
          <div className="flex">
            Equoia
          </div>
      </div>

      
      {/*https://docs.google.com/forms/d/e/1FAIpQLSfsA5cJ5HCwnlil0lZC9DTxsMkDpOLr9yeD0Z22oSMihOeZfg/formResponse?usp=pp_url&
        entry.1001422164=email@email.com
        &
        entry.2005620554=t
        &
        entry.599098402=Career+Opportunity
        &
        entry.839337160=adf
      
      */}
      {/* contact */}
      <div className="flex flex-col w-full h-screen p-5 items-center justify-center">
          
          <form className="flex flex-col items-center gap-5 w-[90%] lg:w-1/2 border-2 bg-base-100 border-base-300 shadow-xl rounded-lg p-2 lg:p-5 h-[90%]" action={"https://docs.google.com/forms/d/e/1FAIpQLSfsA5cJ5HCwnlil0lZC9DTxsMkDpOLr9yeD0Z22oSMihOeZfg/formResponse"}>
            <div className="flex text-3xl font-semibold">Contact Me</div>
            <div className="flex flex-col w-[80%]">
              <label className="flex text-lg">Email</label>
              <input type='email' name="entry.1001422164" className="flex border-2 border-neutral h-8 items-center rounded-lg  px-1 w-full" />
            </div>
            
            <div className="flex flex-col w-[80%]">
              <label className="flex text-lg">Name</label>
              <input type="text" name="entry.2005620554" placeholder="Your Name" className="flex border-2 border-neutral h-8 items-center rounded-lg  px-1" />
            </div>
            
            <div className="flex flex-col w-[80%] gap-1">
              <label className="flex text-lg">Subject</label>
              <select className="flex bg-base-200 rounded-lg px-1 h-8 w-full">
                <option value={"Career+Opportunity"}>Career Opportunity</option>
                <option value={"FreeLance+Work"}>FreeLance Work</option>
                <option value={"Question"}>Question</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>
            <div className="flex flex-col w-[80%] min-h-40">
              <label className="flex text-lg">Message</label>
              <textarea className="border-2 w-full h-full">

              </textarea>
            </div>
            <div className="flex w-full h-full justify-center items-end pb-10">
              <button className="flex w-[80%] h-10 justify-center items-center bg-primary text-primary-content hover:bg-primary-hover rounded-xl" type="submit">
                Send
              </button>
            </div>
          </form>
      </div>

    </div>
  );
}
