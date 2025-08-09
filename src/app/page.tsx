'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ProjectDetails, projects } from "./utils/projects";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import { experiences } from "./utils/experiences";
import Navbar from "./navbar";
import { repoName } from "../../next.config";

export default function Home() {
  
  useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if (entry.isIntersecting){
            entry.target.classList.add('zoom-in-div-in-view')
            entry.target.classList.remove('zoom-in-div')
          }else{
            entry.target.classList.remove('zoom-in-div-in-view')
            entry.target.classList.add('zoom-in-div')
          }
        })
      }, { threshold: 0.15 })
      projects.map((_,i)=>{
        const elem = document.getElementById("projcard-"+i.toString());
        observer.observe(elem);
      })
      console.log(`${repoName}/gh.svg`)
    },[])


  return (
    <div className="flex flex-col relative items-center w-full overflow-x-hidden h-screen bg-base-200 text-base-content 2xl:text-xl gap-5 md:snap-y md:snap-proximity">
      <title>Tirth Patel</title>
        <Navbar />
      {/* landing page (about me) */}
      <div id="aboutme" className="flex flex-col shrink-0 p-5 w-screen h-[90vh] justify-center md:justify-end gap-5">
        <div className="flex text-4xl font-bold ">
          About me
        </div>
        <div className="flex w-full md:h-1/2" />
        <div className="flex flex-col text-xl w-[75%] h-fit text-wrap">
          I&apos;m a curious and driven individual with a strong interest in technology, 
          problem-solving, and continuous learning. 
          <br />
          <div className="h-2" />
          With a background in Computer Science, I enjoy exploring how things work, 
          building creative solutions, and collaborating with others to bring ideas to life. 
          <br />
          <div className="h-2" />
          Whether I&apos;m coding a new project, learning a new tool, or diving into a complex challenge, 
          I approach everything with a growth mindset and a desire to make a positive impact.
        </div>
        <div className="flex w-full h-fit items-center gap-2 lg:gap-5">
        <Link target="_blank" className="flex w-fit px-5 rounded-lg bg-primary hover:bg-primary-hover text-primary-content h-10 items-center justify-center shadow-lg active:shadow-none" href={"/resume"}>Resume</Link>
          <Link href={"https://github.com/TinTanSan"}>
            <Image priority={false} src={'/portfolio/gh.svg'} alt="GH" width={40} height={40} />
          </Link>
          <Link href={"https://www.linkedin.com/in/tirth-patel-748a89367/"}>
            <Image priority={false} src={'/portfolio/linkedin.svg'} className="rounded-lg" alt="Linkedin" width={40} height={40} />
          </Link>

          </div>
      </div> 
      <div id="spacer" className="flex h-1 shrink-0" />
     
      {/* projects */}
      <div id="projects" className="grid grid-flow-row grid-cols-1 grid-rows-10 py-4 w-screen h-[92vh] shrink-0 snap-always snap-end">
        <div className=" px-5 grid row-span-1 h-fit text-2xl md:text-3xl lg:text-4xl font-bold">Things I&apos;ve worked on</div>
        <div className="grid row-span-9 w-full h-full md:overflow-y-hidden overflow-x-auto">
          <div className={`grid grid-flow-row grid-rows-3 px-5 md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-1 gap-2 h-full w-full shrink-0  md:overflow-y-hidden md:overflow-x-hidden`}>
            {projects.map((x:ProjectDetails,i:number)=>
              <ProjectCard projectDetails={x} id={"projcard-"+i.toString()} key={i.toString()}/>
            )}
          </div>
        </div>
        <div className=" px-5 inline md:grid col-span-full grid-flow-col w-fit row-span-1 h-fit gap-1 justify-self-center text-[1rem]  md:text-xl">
              Find other things i&apos;m working on, on my 
              <Link target="_blank" className=" flex underline text-primary" href={"https://github.com/TinTanSan"}>GitHub</Link>
        </div>
      </div>
      
      {/* Experience*/}
      <div id="experience" className="flex flex-col w-screen max-h-fit h-screen p-1">
        <div className="flex flex-col w-full h-full bg-base-100 rounded-lg p-4 gap-5">
          <div className="flex w-full text-2xl md:text-3xl lg:text-4xl">Experience</div>
          <Experience experience={experiences[0]}/>
        </div>
      </div>
      
      {/*  skill set */}
      <div className="flex flex-col w-full h-[95vh] shrink-0 p-5 gap-10 snap-always snap-end">
        <div className="flex flex-col w-full h-fit">
          <div className="flex h-10 w-full text-2xl md:text-3xl lg:text-4xl font-bold">Skillset</div>
          <div className="flex text-xl">Gears that power my code</div>
        </div>
        <div className="grid grid-flow-row-dense grid-rows-6 grid-cols-1 justify-center items-center gap-2 w-full h-full py-5">
            {/* languages */}
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-5 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-1 col-span-full col-start-1 items-center text-xl">Languages</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-5 grid-rows-1 row-span-1 col-span-full md:col-start-2 ">
                <Image title="javascript" src={'/portflio/javascript.svg'} width={60} height={60} alt="JS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="typescript" src={'/portflio/typescript.svg'} width={60} height={60} alt="TS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="python" src={'/portflio/python.svg'} width={60} height={60} alt="PY" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image title="rust" src={'/portflio/rust.svg'} width={60} height={60} alt="RS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="java" src={'/portflio/java.svg'} width={60} height={60} alt="JV" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
            {/* frameworks */}
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-5 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-2 col-span-full col-start-1 items-center text-xl text-nowrap">Frameworks and tools</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-4 grid-rows-1 row-span-1 col-span-full md:col-start-3 ">
                <Image title="nextJS" src={'/portflio/nextjs.svg'} width={60} height={60} alt="Next" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="react" src={'/portflio/react.svg'} width={60} height={60} alt="React" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="electronJS" src={'/portflio/electron.svg'} width={60} height={60} alt="Electron" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image title="tailwind CSS" src={'/portflio/tailwind.svg'} width={60} height={60} alt="Tailwind" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
            {/* others */}
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-6 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-1 col-span-full items-center text-xl text-nowrap">Other</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-5 grid-rows-1 row-span-1 col-span-full md:col-start-2 ">
                <Image title="mysql" src={'/portflio/mongodb.svg'} width={60} height={60} alt="Mongo" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="mysql" src={'/portflio/mysql.svg'} width={60} height={60} alt="MySQL" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="git" src={'/portflio/gh.svg'} width={60} height={60} alt="GH" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image title="docker" src={'/portflio/docker.svg'} width={60} height={60} alt="Docker" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image title="aws" src={'/portflio/aws.svg'} width={60} height={60} alt="AWS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
                
            
            
        </div>
      </div>
    
      {/* contact me form */}
      <div id="contact" className="flex flex-col w-screen h-full p-5 items-center justify-center shirnk-0 grow-0 snap-always snap-end">
          <form className="flex flex-col items-center gap-5 w-full lg:w-1/2 border-2 bg-base-100 border-base-300 shadow-xl rounded-lg p-5 h-[85vh]" action={"https://docs.google.com/forms/d/e/1FAIpQLSfsA5cJ5HCwnlil0lZC9DTxsMkDpOLr9yeD0Z22oSMihOeZfg/formResponse"}>
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
