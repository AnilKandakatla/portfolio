import React from 'react'
import SectionTitles from './SectionTitles'
import AuzTax from './Works/AuzTax'
import Meyd from './Works/Meyd'
import Nineleaps from './Works/Nineleaps'
import { useState } from 'react'

const Experience = () => {
    const [workMeyd, setWorkMeyd] = useState(true);
    const [workAuzT, setWorkAuzT] = useState(false);
    const [workNineleaps, setWorkNineleaps] = useState(false);

    const handleMeyd = () => {
        setWorkMeyd(true)
        setWorkAuzT(false)
        setWorkNineleaps(false)
    }

    const handleAuzT = () => {
        setWorkMeyd(false)
        setWorkAuzT(true)
        setWorkNineleaps(false)
    }

    const handleNineleaps = () => {
        setWorkNineleaps(true)
        setWorkMeyd(false)
        setWorkAuzT(false)
    }

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
        <SectionTitles title='My Work Experience' titleNo='02' />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-32 flex flex-col">
                <li onClick={handleMeyd} className={`${workMeyd ? "border-l-textGreen text-textGreen" 
                :"border-l-hoverColor text-hoverColor" }" border-l-2 bg-transparent hover:bg-[#112240] py-3 
                text-sm cursor-pointer duration-300 px-8 font-medium"`}>
                    Meyd.it
                </li>
                <li onClick={handleAuzT} className={`${workAuzT ? "border-l-textGreen text-textGreen" 
                :"border-l-hoverColor text-hoverColor" }" border-l-2 bg-transparent hover:bg-[#112240] py-3 
                text-sm cursor-pointer duration-300 px-8 font-medium"`}>
                    Auz Taxation
                </li>
                <li onClick={handleNineleaps} className={`${workNineleaps ? "border-l-textGreen text-textGreen" 
                :"border-l-hoverColor text-hoverColor" }" border-l-2 bg-transparent hover:bg-[#112240] py-3 
                text-sm cursor-pointer duration-300 px-8 font-medium"`}>
                    Nineleaps Technology
                </li>
            </ul>
            {workMeyd && <Meyd />}
            {workAuzT && <AuzTax />}
            {workNineleaps && <Nineleaps />}
        </div>
    </section>
    
  )
}

export default Experience