import Title from "./Title"

import imgAngular from "../assets/techno/angular.jpg"
import imgSymfony from "../assets/techno/symfony.svg"
import imgREACT from "../assets/techno/react.png"
import imgSCSS from "../assets/techno/scss.png"
import imgGIT from "../assets/techno/github.png"
import imgFLUTTER from "../assets/techno/flutter.webp"




const skills = [
  { id: 1, name: "Angular", image: imgAngular },
  { id: 2, name: "Symfony", image: imgSymfony },
  { id: 4, name: "React", image: imgREACT },
  { id: 8, name: "SCSS", image: imgSCSS },
  { id: 7, name: "Git", image: imgGIT },
  { id: 3, name: "Flutter", image: imgFLUTTER },
 
]

const experiences = [
  {
    id: 1,
    role: "Développeuse FrontEnd Design System",
    company: "SeqOne",
    period: "Present",
    description: ["Implémentation et maintenance de composants Angular", "Documentation et tests des composants livrés.", "L’exploration et l’intégration d’outils IA pour fluidifier la collaboration design/dev"],
    image: imgGIT
  },
  {
    id: 1,
    role: "Chargée de communication",
    company: "MissionDigitale",
    period: "Sept 2025 - Avril 2026",
    description: ["Création de templates Figma pour l'entreprise.", "Gestion de reseaux sociaux.", "Création d'outils de calcul de prix interactifs en JavaScript."],
    image: imgGIT
  },
  {
    id: 3,
    role: "Freelancer",
    company: "Studiolys",
    period: "Octobre 2025 - Present",
    description: ["Design et développement de site web pour freelancer & petites entreprises.", "Conception d'interfaces réactives et centrées sur l’utilisateur (UX/UI).","Développement d'applications cross-platform","Création d'identités visuelles pour des produits numériques"],
    image: imgGIT
  },
]

const Experience = () => {
  return (
    <div id="Experiences" className="flex flex-col gap-10 mb-50">

      <Title title="Experiences" />

      
      <div className="flex flex-col-reverse justify center items-center gap-20">
        <div className="flex md:flex-row grid grid-cols-3 gap-4 justify-center items-center md:mt-0">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-primary">
                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
              </div>
              <span className="mt-2 text-sm">{skill.name}  </span>
            </div>
          ))}

        </div>

        <div className=" flex md:grid-cols-3 md:grid flex-col gap-12 space-y-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex w-full flex-col card-glass pointer-events-none md:pointer-events-auto">

              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className=" text-accent text-xl font-bold">
                    {experience.role} , {experience.company}
                  </h2>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>


              <ul className="list-disc ml-8 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}

        </div> 
      </div>
    </div>
  )
}

export default Experience
