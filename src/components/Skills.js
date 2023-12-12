import React from 'react'
import {motion} from 'framer-motion'
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-black text-white
          py-3 px-6  shadow-black cursor-pointer absolute xs:bg-transparent
      md:text-black md:bg-white lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-black xs:bg-white xs:font-bold xs:text-xs xs:p-2'
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 2.5}}
      viewport={{once: true}}

    >
      {name}
    </motion.div>

  );
};

const Skills = () => {
  return (
    <>
    <h2 className='font-bold mt-64 w-full 
    text-center text-5xl mb-2 md:mt-32'>
          Skills
    </h2>
    <div className='w-full h-screen relative  flex items-center justify-center rounded-full bg-circularLight bg-black border  border-black
lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>

      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white
          py-3 px-6  shadow-black cursor-pointer absolute xs:bg-transparent
          xs:text-black xs:bg-white lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{scale: 1.05}}

          >
            Web
      </motion.div>
                     
          

          
          <Skill name={'CSS'} x={'-25vw'} y={'5vw'} />
          <Skill name={'HTML'} x={'0w'} y ={'20vw'} />
          <Skill name={'Javascript'} x={'25vw'} y ={'6vw'} />
          <Skill name={'NextJS'} x={'20vw'} y ={'-5vw'} />
          <Skill name={'Python'} x={'26vw'} y={'-15vw'}/>
          <Skill name={'Generative AI'} x={'0vw'} y={'-20vw'}/>
          <Skill name={'Typescript'} x={'-20vw'} y={'-16vw'}/>
          <Skill name={'TailwindCSS'} x={'-20vw'} y={'20vw'}/>

       

    </div>
    </>
  )
}

export default Skills