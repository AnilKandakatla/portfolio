import React from 'react'
import SectionTitles from './SectionTitles'
import {AiFillThunderbolt} from 'react-icons/ai'
import { profileImg } from '@/public/assets'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitles title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                An experienced full-stack developer having over 2-years experience in software development, web development, 
            cyber systems and data analytics. Experienced in product development and web application programming across 
            multiple organisations and passionate about developing optimal software development and delivering 
            customer satisfaction.
                </p>
                <p>Here are the few technologies I worked: </p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Typescript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Java
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>TailwindCSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>AWS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>SQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>HTML5
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>MS Office
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Python
                  </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
              <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                  <Image className="rounded-lg h-full object-cover" src={profileImg} alt="profile" />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About