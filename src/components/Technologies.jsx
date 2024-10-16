import { RiReactjsLine} from 'react-icons/ri'
import { SiMongodb} from 'react-icons/si'
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TfiHtml5 } from "react-icons/tfi"
import { SiSocketdotio } from "react-icons/si"
import { FaCss3Alt } from "react-icons/fa6"
import { animate, easeIn, m, motion } from 'framer-motion';

const iconvVariants= (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1,x:0 }}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}} 
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                variants={iconvVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <TfiHtml5 className='text-7xl text-gray-500' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(3.5)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <FaCss3Alt className='text-7xl text-red-500' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <IoLogoJavascript className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(5)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <SiSocketdotio className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div 
                variants={iconvVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded 3xl border-4 border-neutral-800 gap-4'>
                    <FaNodeJs className='text-7xl' />
                </motion.div> 
            </motion.div> 
        </div>
    )
}
export default Technologies