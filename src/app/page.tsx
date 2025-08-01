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
    },
    
    
    {
      projectName: "A project",
      projectOverview: `A minimalist cross-platform desktop application built to serve my needs for a secure offline 
        password manager. Taking inspiration from KeePass I set out to create a password manager which would be simple to 
        use, with help along the way. 
        
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.
        This sentence should make this overview really really long. Try this sentence if the first one did not make it long enough; shoudl this also not work, try again.`,
      techUsed: ['electron','typescript','tailwind'],
    },
  ]



  return (
    <div className="flex flex-col w-screen overflow-x-hidden h-full bg-base-200 text-base-content 2xl:text-xl gap-5">
      <title>Tirth Patel</title>
      {/* landing page (about me) */}
      <div className="flex flex-col p-5 w-screen h-screen text-wrap flex-wrap justify-center md:justify-end md:pb-10 gap-5">
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
        <div className="flex w-full h-fit items-center gap-2 lg:gap-5">
        <Link target="_blank" className="flex w-fit px-5 rounded-lg bg-primary hover:bg-primary-hover text-primary-content h-10 items-center justify-center shadow-lg active:shadow-none" href={"/resume"}>Resume</Link>
        {/* github */}
        <Link href={"https://github.com/TinTanSan"}>
          <Image src={"/gh.svg"} alt="GH" width={40} height={40} />
        </Link>
        <Link href={"https://www.linkedin.com/in/tirth-patel-748a89367/"}>
          <Image src={"/linkedin.svg"} className="rounded-lg" alt="GH" width={40} height={40} />
        </Link>

        </div>
      </div>
      {/* projects */}
      <div className="grid grid-flow-row grid-cols-1 grid-rows-10 gap-5 p-5 w-screen h-screen">
        <div className="grid row-span-1 h-fit col-span-full text-2xl md:text-3xl lg:text-4xl font-bold">Things I've worked on</div>
        <div className="grid row-span-9 col-span-full w-full h-full overflow-y-auto overflow-x-auto">
        <div className={`grid row-span-9 col-span-full grid-flow-row grid-cols-1 grid-rows-3 md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-2 gap-5 h-fit md:h-full overflow-y-auto overflow-x-hidden`}>
          {projects.map((x:ProjectDetails,i:number)=>
            <ProjectCard projectDetails={x} key={i.toString()}/>
          )}
        </div>
        </div>
      </div>

      {/* Experience*/}
      <div className="flex flex-col w-screen h-screen p-5">
          <div className="flex w-full text-2xl md:text-3xl lg:text-4xl">Experience</div>
          <div className="flex">
            Equoia
          </div>
      </div>

    
      {/* contact me form */}
      <div className="flex flex-col w-full h-screen p-5 items-center justify-center">
          
          <form className="flex flex-col items-center gap-5 w-full lg:w-1/2 border-2 bg-base-100 border-base-300 shadow-xl rounded-lg p-5 h-[90%]" action={"https://docs.google.com/forms/d/e/1FAIpQLSfsA5cJ5HCwnlil0lZC9DTxsMkDpOLr9yeD0Z22oSMihOeZfg/formResponse"}>
            <div className="flex text-3xl font-semibold">Contact Me</div>
            <div className="flex flex-col w-full lg:w-[80%]">
              <label className="flex text-lg">Email</label>
              <input type='email' name="entry.1001422164" className="flex border-2 border-neutral h-8 items-center rounded-lg  px-1 w-full" />
            </div>
            
            <div className="flex flex-col w-full lg:w-[80%]">
              <label className="flex text-lg">Name</label>
              <input type="text" name="entry.2005620554" placeholder="Your Name" className="flex border-2 border-neutral h-8 items-center rounded-lg  px-1" />
            </div>
            
            <div className="flex flex-col w-full lg:w-[80%] gap-1">
              <label className="flex text-lg">Subject</label>

              <select className="flex bg-base-200 rounded-lg px-1 h-8 w-full">
                <option value={"Career+Opportunity"}>Career Opportunity</option>
                <option value={"FreeLance+Work"}>FreeLance Work</option>
                <option value={"Question"}>Question</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-[80%] h-full lg:min-h-40">
              <label className="flex text-lg">Message</label>
              <textarea name="entry.839337160" className="border-2 w-full h-full rounded-lg" />
            </div>

            <div className="flex w-full h-fit lg:h-full justify-center items-end pb-2 lg:pb-10">
              <button className="flex w-[80%] h-10 justify-center items-center bg-primary text-primary-content hover:bg-primary-hover rounded-xl" type="submit">
                Send
              </button>
            </div>
          </form>
      </div>

    </div>
  );
}
