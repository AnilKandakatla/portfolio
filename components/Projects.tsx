import React from 'react'
import SectionTitles from './SectionTitles'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import {RxOpenInNewWindow} from 'react-icons/rx'
import { project1 } from '@/public/assets'

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitles title="Somethings I have Built" titleNo="03" />
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
                <a className="w-full xl:w-1/2 h-auto relative group"
                href="https://fmaniac.vercel.app//" target="_blank">
                <div>
                    <Image className="w-full h-full object-contain"
                    src={project1}
                    alt="project1" />
                </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end 
            text-right xl:ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                <h3 className="text-2xl font-bold">Fashion Maniac 1.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">An e-commerce website to shop clothes 
                which are trending in the current fashion world.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    <li>React JS</li>
                    <li>JavaScript</li>
                    <li>Vercel</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <a 
                    className="hover:text-textGreen duration-300"
                    href="https://www.ibomma.net/telugu-movies"
                    target="_blank">
                        <TbBrandGithub />
                    </a>
                    <a 
                    className="hover:text-textGreen duration-300"
                    href="https://fmaniac.vercel.app/"
                    target="_blank">
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Projects