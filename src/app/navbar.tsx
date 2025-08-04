'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [width, setWidth]= useState(-1);
    const [openHamburgerMenu, setOpenHamburger] = useState(false);
    useEffect(()=>{
        setWidth(window.screen.availWidth);
    },[]);
    return (
         (width <  1000)?
        <div className='flex'>
            hello
        </div>
        
        :
        <div className='flex w-[98%] z-10 fixed rounded-lg top-1 items-center p-2 px-0.5 h-10 bg-base-100 border-2 border-base-300'>
            <div className='flex w-full gap-2'>
                <Link href={"#aboutMe"}  className='bg-accent hover:bg-accent-hover flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'>About Me</Link>
                <Link href={"#projects"} className='bg-accent hover:bg-accent-hover flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'>Projects</Link>
                <Link href={"#experience"} className='bg-accent hover:bg-accent-hover flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'>Experience</Link>
            </div>
            <div className='flex w-fit'>
                <Link href={"#contact"} className='bg-primary hover:bg-primary-hover flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'>Contact</Link>
            </div>
        </div>
    )
}
