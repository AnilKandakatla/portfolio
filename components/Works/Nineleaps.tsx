import {motion} from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

const Nineleaps = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Software Engineer
        <span className="text-textGreen tracking-wide">@Nineleaps Technology Solutions</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Apr 2019 - Feb 2020</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Worked on developing hybrid mobile applications that run on both IoS and android platforms
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Worked on integration of react native with redux to create more sophisticated applications
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Created REST API’s by using Java spring boot for back-end to interact with application front-end
            </li>
        </ul>
    </motion.div>
  )
}

export default Nineleaps