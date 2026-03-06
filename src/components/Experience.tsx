import Title from "./Title"

import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgREACT from "../assets/techno/react.png"
import imgTYPESCRIPT from "../assets/techno/typescript.svg"
import imgGIT from "../assets/techno/github.png"
import imgFLUTTER from "../assets/techno/flutter.webp"




const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 4, name: "React", image: imgREACT },
  { id: 8, name: "TypeScript", image: imgTYPESCRIPT },
  { id: 7, name: "Git", image: imgGIT },
  { id: 3, name: "Flutter", image: imgFLUTTER },
 
]

const experiences = [
  {
    id: 1,
    role: "Chargée de communication",
    company: "MissionDigitale",
    period: "Sept 2025 - Present",
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
  {
    id: 2,
    role: "Graphic & webdesigner",
    company: "La Folie des Senteurs",
    period: "2024-2025",
    description: ["Création d'illustrations personnalisées pour les produits.", "Refonte et optimisation de la boutique en ligne pour améliorer l'expérience utilisateur et la cohérence visuelle.","Refonte du SEO pour améliorer la visibilité sur les moteurs de recherche et le trafic organique"],
    image: imgGIT
  },
  
]

const Experience = () => {
  return (
    <div id="Experiences" className="flex flex-col gap-10 mb-50">

      <Title title="Experiences" />

      
      <div className="flex flex-col-reverse justify center items-center gap-20">
        <div className="flex md:flex-row grid grid-cols-3 gap-4 justify-center items-center md:w-1/3 md:mt-0">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-primary">
                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
              </div>
              <span className="mt-2 text-sm">{skill.name}  </span>
            </div>
          ))}

        </div>

        <div className=" flex md:flex-row flex-col gap-12 space-y-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex w-full flex-col card-glass">

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
