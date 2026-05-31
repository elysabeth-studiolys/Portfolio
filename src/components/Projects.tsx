import { Link } from "react-router-dom"

import Title from "./Title"

import app from '../assets/projects/app.jpg'
import studiolys from '../assets/projects/studiolys.png'
import gamejam from '../assets/projects/gamejam.webp'
import scss from '../assets/projects/scss.webp'
import dashboard from '../assets/projects/dashboard.webp'
import studiogaming from '../assets/projects/studiogaming-mockup.webp'

import { Github, Eye } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Application mobile Bien-être",
        description: "Application mobile conçue pour aider les utilisateurs à suivre et améliorer leur santé mentale ainsi que leur bien-être global.",
        technologies: ["Flutter", "Firebase", "Dart"],
        slug: 'serenity',
        repoLink: 'https://github.com/elysabeth-studiolys/studiolys-app',
        image: app,
    },
    {
        id: 5,
        title: "Dashboard pour petites entreprises",
        description: "Application CRM fullstack développée de A à Z, permettant de gérer contacts, entreprises, ventes et projets.",
        technologies: ["Angular", "PHP", "MySQL"],
        slug: "dashboard",
        repoLink: 'https://github.com/elysabeth-studiolys/School-project-scss',
        image: dashboard,
    },
    {
        id: 4,
        title: "Site web de freelance",
        description: "Site web de freelance conçu pour présenter les services & obtenir des clients.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        slug: 'studio-lys',
        repoLink: 'https://github.com/elysabeth-studiolys/studiolys',
        image: studiolys,
    },
    {
        id: 2,
        title: "Platformer 2D",
        description: "Un plate-former 2D construit autour de mécaniques basées sur la température — geler, fondre et surchauffer pour progresser.",
        technologies: ["C#", "Unity"],
        slug: "terminus",
        repoLink: 'https://github.com/elysabeth-studiolys/GameJam-Terminus',
        image: gamejam,
    },
    {
        id: 3,
        title: "From CSS to SCSS",
        description: "Projet scolaire développé dans le cadre de l'apprentissage des fondamentaux de SCSS et de l'architecture de style.",
        technologies: ["HTML", "SCSS", "Dart Sass"],
        slug: "css-to-scss",
        repoLink: 'https://github.com/elysabeth-studiolys/School-project-scss',
        image: scss,
    },
     {
        id: 4,
        title: "StudioGaming",
        description: "Forum intéractif de jeux vidéo, d'actualités et de vérification de setup gaming.",
        technologies: ["Symfony", "MySQL", "React"],
        slug: "studiogaming",
        repoLink: 'https://github.com/elysabeth-studiolys/School-project-scss',
        image: studiogaming,
    },
    
]

const Projects = () => {
  return (
    
    <div className="mt-10 flex flex-col gap-20 mb-50" id="Projects">
      <Title title="Derniers Projets" />
      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project) => (
            <div key={project.id}className="card-glass-mobile h-full ">
                <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover" />
                <div>
                    <h2 className="my-2 font-bold">
                        {project.title}
                    </h2>
                    <p className="text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 my-3">
                    {project.technologies.map((tech) => (
                        <span className="badge badge-accent badge-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2 ">
                    <Link className="btn  btn-accent w-1/3 " to={`/projects/${project.slug}`}>
                        <Eye className="w-4" />
                        Voir
                        
                    </Link>
                    <a className="btn btn-soft btn-accent  w-2/3" href={project.repoLink}>
                        <Github className="w-4" />
                        GitHub
                        
                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
