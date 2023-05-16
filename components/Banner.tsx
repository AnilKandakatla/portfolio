import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';
import {useRef} from 'react'
import Link from 'next/link'

const Banner = () => {
  const ref=useRef<string | any>("")
  const handleScroll =(e:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>{
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior:"smooth"
    })
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link)=>{
      link.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  }
  return (
    <section id="home"
    className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        {/* <motion.h3 
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.6}}
        className="text-lg font-titleFont tracking-wide text-textGreen">Hi, My name is</motion.h3> */}
        <motion.h1
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >Anil Kandakatla 
        {/*<span className="text-textDark mt-2 lgl:mt-4">
          I build websites for fun.
  </span>*/}
          <div className="text-2xl text-textDark mt-2 lgl:mt-4">
          <Typewriter options={{
            strings: ['Full Stack Developer...', 'Web Developer...', 'Front End Developer...'],
            autoStart: true,
            loop:true
          }} />
          </div>
        </motion.h1>
        <motion.p
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.8}}
        className="text-base md:max-w-[650px] text-textDark font-medium"
        >An experienced full-stack developer having over 2-years experience in software development, web development, 
            cyber systems and data analytics. Experienced in product development and web application programming across 
            multiple organisations and passionate about developing optimal software development and delivering 
            customer satisfaction.
        </motion.p>
        <Link href="#project"  onClick={handleScroll}>
        <motion.button
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5, delay:0.9}}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen
        tracking-wide hover:bg-slate-500 duration-300">Projects section</motion.button>
        </Link>
    </section>
  )
}

export default Banner