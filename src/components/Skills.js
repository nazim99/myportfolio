import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {

    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold" 
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate={{x:x, y:y}}
        transition={ {duration: 2.2} }
        viewport={{once: true}}
        >{name}</motion.div>
    )
}

export default function Skills() {
  return (
    <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32">Skills</h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:text-light dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:bg-dark:circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
            <Skill name={'Web'}/>
            <Skill name={'HTML'} x={'-22vw'} y={'2vw'} />
            <Skill name={'CSS'} x={'-5vw'} y={'-10vw'} />
            <Skill name={'javascript'} x={'20vw'} y={'6vw'} />
            <Skill name={'ReactJs'} x={'0vw'} y={'12vw'} />
            <Skill name={'NextJs'} x={'-20vw'} y={'-15vw'} />
            <Skill name={'GatsbyJs'} x={'15vw'} y={'-12vw'} />
            <Skill name={'Web Designing'} x={'32vw'} y={'-5vw'} />
            <Skill name={'Figma'} x={'0vw'} y={'-20vw'} />
            <Skill name={'Firebase'} x={'-25vw'} y={'18vw'} />
            <Skill name={'Tailwind CSS'} x={'18vw'} y={'18vw'} />
        </div>
    </>
  )
}
