'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [openHamburgerMenu, setOpenHamburger] = useState(false);
    const buttonStyle = 'bg-accent hover:bg-accent-hover hover:scale-110 transition-all duration-500 flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'

    return (
        <div className='flex w-[98%] z-10 sticky rounded-lg top-1 items-center p-2 h-12 bg-base-100 border-2 border-base-300 justify-center'>
            <div className='flex collapse w-0 md:visible md:flex-row md:w-full gap-2'>
                <Link href={"#aboutMe"}  className={buttonStyle}>About Me</Link>
                <Link href={"#projects"} className={buttonStyle}>Projects</Link>
                <Link href={"#experience"} className={buttonStyle}>Experience</Link>
            </div>
            <div className='flex visible md:collapse flex-row w-fit gap-0'>
                <button onClick={()=>{setOpenHamburger(!openHamburgerMenu)}}>
                    <Image src={"/menu.svg"} alt='Menu'  width={40} height={40}/>
                </button>
            </div>
            <div className='flex w-full' />
            <div className='flex w-fit'>
                <Link href={"#contact"} className='bg-primary hover:bg-primary-hover flex h-8 items-center justify-center px-5 rounded-lg text-accent-content'>Contact</Link>
            </div>
            {openHamburgerMenu && 
                <div className='flex flex-col fixed z-10 w-[98%] bg-base-100 border-2 border-base-300 rounded-lg pl-2 pb-5 h-fit gap-5 top-1 md:invisible'>
                    <div className='flex w-full'>
                    <button className='flex w-10 h-10' onClick={()=>{setOpenHamburger(!openHamburgerMenu)}}>
                        <Image src={"/close_menu.svg"} alt='Menu' className='z-[60] border-2' width={40} height={40}/>
                    </button>
                    </div>
                    <div className='flex flex-col gap-2 w-[80%]'>
                        <Link href={"#aboutMe"}  className={buttonStyle}>About Me</Link>
                        <Link href={"#projects"} className={buttonStyle}>Projects</Link>
                        <Link href={"#experience"} className={buttonStyle}>Experience</Link>
                    </div>
                    <div className='flex w-full h-fit gap-5'> 
                        <Link href={"https://github.com/TinTanSan"}>
                            <Image priority={false} src={"/gh.svg"} alt="GH" width={40} height={40} />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/tirth-patel-748a89367/"}>
                            <Image priority={false} src={"/linkedin.svg"} className="rounded-lg" alt="Linkedin" width={40} height={40} />
                        </Link>
                    </div>
                </div>
            }
        </div>

    )
}
