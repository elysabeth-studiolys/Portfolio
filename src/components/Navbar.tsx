import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

import logo from '../assets/logo_round_.png'



const Navbar = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })


    return (
        <motion.nav 
        className="hidden z-99 md:flex nav-glass fixed top-5 w-2/3 items-center p-2 text-center h-20"
        animate={{ 
            y: hidden ? -140 : 0,
            opacity: hidden ? 0 : 1,
             }} 
             transition={{ duration: 0.3, ease: "easeInOut" }}
             >

                    <a href='#'
                        className="flex items-center ">

                    <img src={logo} className="w-15" />
                </a>

                <ul
                    className=" md:flex justify-between items-center w-auto ml-auto gap-5 mr-2">
                    <li>
                        <a href="#About"
                            className="btn-default"
                        >
                            À PROPOS
                        </a>
                    </li>
                    <li>
                        <a href="#Experiences"
                            className="btn-default"
                        >
                            EXPÉRIENCES
                        </a>
                    </li>
                    
                    <li>
                        <a href="#Projets"
                            className="btn-gradient"
                        >
                            DERNIERS PROJETS
                        </a>
                    </li>


                </ul>

        </motion.nav>
    )
}

export default Navbar
