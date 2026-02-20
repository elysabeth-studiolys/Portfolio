import Title from "./Title"

import app from '../assets/projects/app.jpg'

import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Wellbeing mobile app",
        description: "A mobile application designed to help users track and improve their mental health and overall wellbeing.",
        technologies: ["Flutter", "Firebase", "Dart"],
        demoLink: '#',
        repoLink: 'https://github.com/elysabeth-studiolys/studiolys-app',
        image: app,
    }
]

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col gap-20 mb-50" id="Projects">
      <Title title="Last Projects" />
      <div className="grid md: grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id}className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover" />
                <div>
                    <h1 className="my-2 font-bold">
                        {project.title}
                    </h1>
                    <p className="text-sm">{project.description}</p>
                </div>

                <div className="flex flex-rap gap-2 my-3">
                    {project.technologies.map((tech) => (
                        <span className="badge badge-primary badge-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <a className="hidden btn btn-primary w-2/3" href={project.demoLink}>
                        <Video className="w-4" />
                        Demo
                        
                    </a>
                    <a className="btn btn-soft btn-primary w-2/3" href={project.repoLink}>
                        <Github className="w-4" />
                        
                        
                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
