import {motion} from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

const AuzTax = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Data Analyst
        <span className="text-textGreen tracking-wide">@Auz Taxation</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2021 - Mar 2022</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Worked with the organisation to propose appropriate data analysis to enhance business customer service.
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Implementing and using Machine Learning algorithms as required for data analysis.
            </li>
            <li className="text-base gap-2 flex text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward />
                </span>
                Building data models to merge, manage, and extract data to provide tailored reports to colleagues and clients.
            </li>
        </ul>
    </motion.div>
  )
}

export default AuzTax