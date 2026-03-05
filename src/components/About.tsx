import Title from "./Title"
import back from '../assets/backline.png'
import { CodeXml, Figma, Smartphone } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Flutter",
        description: "Je suis passionnée par le développement mobile et j'ai des bases solides en Flutter, ce qui me permet de créer des applications mobiles performantes et attrayantes",
        icon: <Smartphone className="text-primary scale 150" />

    },
    {
        id: 2,
        title: "Développeuse web",
        description: "J'ai des compétences solides en développement web, avec une expérience en React, JavaScript et TypeScript",
        icon: <CodeXml className="text-primary scale 150" />

    },
    {
        id: 3,
        title: "Passionnée par l'UI/UX",
        description: "J'ai des bonnes compétences en design UI/UX, avec un regard aiguisé pour créer des interfaces utilisateur intuitives et visuellement attrayantes",
        icon: <Figma className="text-primary scale 150" />

    }
]

const About = () => {
    return (
        <section className=" p-10 mb-10 md:mb-32 flex flex-col gap-15 justify-center text-center" id="About">

            <img src={back} alt="" className="absolute top-95 left-0 w-full h-full object-cover  -z-10" />
                <Title title="À propos de moi" />

                <p className="mx-20 text-xl">
                    Développeuse web & mobile en formation, je transforme des idées en applications concrètes. <br />
                    Curieuse, rigoureuse et créative, j’aime comprendre en profondeur, structurer proprement et concevoir des interfaces pensées pour l’humain.
                    <br />Chaque projet est pour moi un terrain d’apprentissage et d’amélioration continue.
                </p>

                <div className=" flex justify-center items-center mb-20">

                    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:ml-4 space-y-4">
                        {aboutSections.map((section) => (
                            <div key={section.id} className="flex flex-col  items-center card-glass">


                                <div className="md:ml-4 text-center ">
                                    <h2 className="text-2xl font-bold mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm">
                                        {section.description}
                                    </p>
                                    <div className="flex justify-center ">
                                    </div>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </div>
        </section>

    )
}

export default About  
