import {motion} from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

const Meyd = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Full Stack Developer
        <span className="text-textGreen tracking-wide">@Meyd.it</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Oct 2022 - Present</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Creating and developing RESTful API’s using Adonis and Nodejs to integrate with front-end web development
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Designing front-end features in typescript that allow the users to interact with the web applications
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Conducting framework integration along with automating the deployment using DevOps.
            </li>
        </ul>
    </motion.div>
  )
}

export default Meyd