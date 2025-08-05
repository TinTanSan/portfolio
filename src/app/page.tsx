'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ProjectDetails, projects } from "./utils/projects";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import { experiences } from "./utils/experiences";
import Navbar from "./navbar";

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
      }, { threshold: 0.5 })
      projects.map((_,i)=>{
        const elem = document.getElementById("projcard-"+i.toString());
        observer.observe(elem);
      })
      
    },[])


  return (
    <div  className="flex flex-col w-full overflow-x-hidden h-full bg-base-200 text-base-content 2xl:text-xl gap-5">
      <title>Tirth Patel</title>
      <Navbar />
      {/* landing page (about me) */}
      <div id="aboutme" className="flex flex-col p-5 w-screen h-screen text-wrap flex-wrap justify-center md:justify-end md:pb-10 gap-5">
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
          <Image priority={false} src={"/gh.svg"} alt="GH" width={40} height={40} />
        </Link>
        <Link href={"https://www.linkedin.com/in/tirth-patel-748a89367/"}>
          <Image priority={false} src={"/linkedin.svg"} className="rounded-lg" alt="Linkedin" width={40} height={40} />
        </Link>

        </div>
      </div>
      {/* projects */}
      <div id="projects" className="grid grid-flow-row grid-cols-1 grid-rows-10 gap-5 p-5 w-screen h-screen">
        <div className="grid row-span-1 h-fit text-2xl md:text-3xl lg:text-4xl font-bold">Things I've worked on</div>
        <div className="grid row-span-9 w-full h-full overflow-y-auto overflow-x-auto">
          <div className={`grid grid-flow-row grid-rows-3 md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-1 gap-2 h-fit py-10 md:overflow-y-hidden md:overflow-x-hidden`}>
            {projects.map((x:ProjectDetails,i:number)=>
              <ProjectCard projectDetails={x} id={"projcard-"+i.toString()} key={i.toString()}/>
            )}
          </div>
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
      <div className="flex flex-col w-full h-screen p-5 gap-10">
        <div className="flex flex-col w-full h-fit">
          <div className="flex h-10 w-full text-2xl md:text-3xl lg:text-4xl font-bold">Skillset</div>
          <div className="flex text-xl">Gears that power my code</div>
        </div>
        <div className="grid grid-flow-row-dense grid-rows-6 grid-cols-1 justify-center items-center gap-2 w-full h-full py-5">
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-5 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-1 col-span-full col-start-1 items-center text-xl">Languages</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-5 grid-rows-1 row-span-1 col-span-full md:col-start-2 ">
                <Image src={'javascript.svg'} width={60} height={60} alt="JS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'typescript.svg'} width={60} height={60} alt="TS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'python.svg'} width={60} height={60} alt="PY" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image src={'rust.svg'} width={60} height={60} alt="RS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'java.svg'} width={60} height={60} alt="JV" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
            
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-5 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-2 col-span-full col-start-1 items-center text-xl text-nowrap">Frameworks and tools</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-4 grid-rows-1 row-span-1 col-span-full md:col-start-3 ">
                <Image src={'nextjs.svg'} width={60} height={60} alt="JS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'react.svg'} width={60} height={60} alt="TS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'electron.svg'} width={60} height={60} alt="PY" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image src={'tailwind.svg'} width={60} height={60} alt="RS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
                
            <div className="w-full row-span-2 col-span-fullh-full grid grid-flow-row-dense md:grid-flow-col-dense gap-2 grid-cols-5 md:grid-cols-6 grid-rows-2 md:grid-rows-1">
              <div className="w-full h-full grid md:row-span-1 md:col-span-2 col-span-full col-start-1 items-center text-xl text-nowrap">Other</div>
              <div className="w-full h-full grid grid-flow-col-dense grid-cols-4 grid-rows-1 row-span-1 col-span-full md:col-start-3 ">
                <Image src={'mysql.svg'} width={60} height={60} alt="JS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'gh.svg'} width={60} height={60} alt="TS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
                <Image src={'docker.svg'} width={60} height={60} alt="PY" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />  
                <Image src={'aws.svg'} width={60} height={60} alt="RS" className="grid rounded-lg h-10 w-10 md:h-20 md:w-20" />
              </div>
            </div>
                
                
            {/*
            
            <Image src={'gh.svg'} width={60} height={60} alt="GH" className="grid rounded-lg" />
            <Image src={'mysql.svg'} width={60} height={60} alt="SQL" className="grid rounded-lg" />
            
            <Image src={'docker.svg'} width={60} height={60} alt="DK" className="grid rounded-lg" />
            <Image src={'aws.svg'} width={60} height={60} alt="AW" className="grid rounded-lg" /> */}
            
            
        </div>
      </div>
    
      {/* contact me form */}
      <div id="contact" className="flex flex-col w-full h-screen p-5 items-center justify-center">
          
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
