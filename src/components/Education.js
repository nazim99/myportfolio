import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'
const Detail = ({type, time, info, place}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between dark:text-light md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type:'spring'}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light xs:text-sm">
                    {time} | {place}
                </span>
                <p className='w-full font-medium md:text-sm'>{info}</p>
            </motion.div>
        </li>
    )
}
export default function Education() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">Education</h2>
        <div ref={ref} className="w-[75] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div 
            style = {{scaleY: scrollYProgress}}
            className="absolute top-0 left-9 w-[4px] h-full bg-dark origin-top dark:bg-light md:w[2px] md:left-[30px] xs:left-[20px]" />

            <ul className='w-full flex flex-col items-start justify-between ml-4 dark:text-light xs:ml-2'>
                <Detail 
                    type="Software Engineer"
                    time="2022-Present"
                    place="Mountain View, CA"
                    info="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                />
                <Detail 
                    type="Software Engineer"
                    time="2022-Present"
                    place="Mountain View, CA"
                    info="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                />
                <Detail 
                    type="Software Engineer"
                    time="2022-Present"
                    place="Mountain View, CA"
                    info="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                />
                <Detail 
                    type="Software Engineer"
                    time="2022-Present"
                    place="Mountain View, CA"
                    info="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                />
            </ul>
        
        </div>
    </div>
  )
}
