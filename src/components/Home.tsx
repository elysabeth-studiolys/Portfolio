import { FileText } from "lucide-react"
import { Code } from "lucide-react"
import avatar from '../assets/avatar.png'
import cv from '../assets/CV 2026.pdf'

import { motion } from "motion/react"




const Home = () => {
    return (
        <section className=" flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">

            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <div className="flex flex-col fustify-end ">
                <h1 className=" font-bold text-center md:text-left mt-4 md:mt-0">
                    Je suis <br /> {" "}
                    <span className="gradient-brand-text">
                        Elysabeth
                    </span> 
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Développeuse web et mobile junior,
                    <br /> à la recherche de mon <span className="font-bold text-accent">alternance</span> pour
                    <br />l'année 2026-2027
                </p>
                <div className="flex space-x-4">
                    <a href="#Projects" className="btn gradient-brand w-fit">
                        <Code className="w-5 h-5"/>
                        Voir mes derniers projets
                    </a>
                    <a href={cv} download className="btn btn-soft gradient-brand-text w-fit">
                        <FileText  />
                        Télécharger mon CV
                    </a>
                </div>


            </div>
            </motion.div>
            <div className="md:ml-50  p-2" style={{
                    borderRadius : "59% 41% 60% 40% / 48% 53% 47% 52% "
                }}>
                <img src={avatar} alt="" className="w-100 h-100 object-cover shadow-xl"
                style={{
                    borderRadius : "59% 41% 60% 40% / 48% 53% 47% 52% "
                }}
                />
            </div>
        </section>
    )
}

export default Home
