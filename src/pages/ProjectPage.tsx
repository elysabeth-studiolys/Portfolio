import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"
import Title from "../components/Title"

import { Github } from "lucide-react"
import Footer from "../components/Footer"



const ProjectPage = () => {

    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        return (
            <div className="p-5 md:px-[15%]">
                <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
                <p>Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
                <Link to="/" className="text-blue-500 mt-4 inline-block">Retour à l'accueil</Link>




            </div>
        )
    }


    return (
        <section className="flex flex-col md:mx-10 items-center gap-8 my-12">
            <div className=" flex flex-col gap-12  md:px-20 px-5 items-center">

                <Link to="/" className="md:self-start md:-mb-15">
                ← Retour
                </Link>

                <div className="flex flex-col text-center">
                <Title title={project.title} />
                <h2 className="text-xl ">{project.subtitle}</h2>
                </div>
                <div className="flex flex-col md:flex-row  gap-4">
                    {project.tech.map((tech) => (
                        <span className="btn-gradient-border-mobile text-sm text-center">

                            {tech}
                        </span>
                    ))}
                </div>

                <img src={project.image[0]} alt="Project image" className="card-glass w-full pointer-events-none" />
                { project.image.length > 1 && (
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <img src={project.image[1]} alt="Project image" className="card-glass  md:w-1/3" />
                    <img src={project.image[2]} alt="Project image" className="card-glass md:w-1/3" />
                    <img src={project.image[3]} alt="Project image" className="card-glass md:w-1/3" />

                </div>
                )}
                <div className="flex gap-4 items-left w-full">
                    <div className="w-2 h-10 rounded-xl gradient-brand" />
                    <h2 className="text-4xl font-bold">Fonctionnalités clés</h2>
                </div>
                {project.features && (
                    <div className="flex flex-col md:flex-row gap-12">
                        {project.features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="flex flex-col gap-2 p-4 card-glass pointer-events-none md:pointer-events-auto items-center text-center">
                                    <Icon size={24} className="text-primary" />
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>
                )}

                <div className="flex gap-4 items-left w-full">
                    <div className="w-2 h-10 rounded-xl gradient-brand" />
                    <h2 className="text-4xl font-bold">À propos de ce projet</h2>
                </div>
                <div className="card-glass pointer-events-none md:pointer-events-auto p-6">
                    {project.longDescription.map((paragraph, index) => (
                        <p key={index} className="p-6">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 ">
                <a href={project.github} className="btn-gradient mt-4 flex items-center gap-1 justify-center">
                    <Github className="w-5" />
                Voir sur GitHub
                </a>
                <Link to="/#projects" className="btn-gradient-border mt-4 flex items-center gap-1">
                Voir mes autres projets
                </Link>
                </div>
            </div>

            <Footer />
        </section>


    )
}

export default ProjectPage
