import Title from "./Title"
import { CodeXml, Figma, Smartphone } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Design",
        description: "UI/UX, identités visuelles, motion design — l'origine du parcours",
        icon: <Smartphone className="text-primary scale 150" />

    },
    {
        id: 2,
        title: "Frontend",
        description: "React, Angular, SCSS, TypeScript — interfaces pensées pour l'humain",
        icon: <CodeXml className="text-primary scale 150" />

    },
    {
        id: 3,
        title: "Full-stack",
        description: "Symfony, PHP, Docker, CI/CD — autonomie de bout en bout",
        icon: <Figma className="text-primary scale 150" />

    },
     {
        id: 4,
        title: "Mobile",
        description: "Flutter, Clean Archi, TestFlight — apps iOS/Android en prod",
        icon: <Figma className="text-primary scale 150" />

    }
]

const About = () => {
    return (
        <section className=" p-10 mb-10 md:mb-32 flex flex-col gap-15 justify-center text-center" id="About">

            <div>
                <Title title="Mon parcours" />

                <p className="italic text-xl">
                    "Je transforme des idées en applications — du design à la ligne de code."
                </p>
            </div>


            <p className="md:mx-20 md:text-xl">
                Je m'appelle Elysabeth, développeuse web & mobile. Mon parcours a démarré par le design et la curiosité pour les interfaces. En cherchant à les rendre vivantes, j'ai appris à coder — et je n'ai plus arrêté. Aujourd'hui je travaille en freelance sous le nom de Studio Lys : sites web, apps mobiles, identités visuelles. Chaque projet est pour moi un terrain où structurer proprement et concevoir avec intention.

            </p>

            <div className=" flex justify-center items-center mb-20">

                <div className="flex flex-col md:grid md:grid-cols-4 gap-12 md:ml-4 ">
                    {aboutSections.map((section) => (
                        <div key={section.id} className="flex flex-col  items-center card-glass pointer-events-none md:pointer-events-auto">


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
