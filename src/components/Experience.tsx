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
    role: "Comunication assistant",
    company: "MissionDigitale",
    period: "Sept 2025 - Present",
    description: ["Created some figma templates for the organization.", "Maintained the organization's website and social media presence.", "Developed custom JavaScript pricing and estimation tools for construction and real estate projects."],
    image: imgGIT
  },
  {
    id: 3,
    role: "Freelancer",
    company: "Studiolys",
    period: "Octobre 2025 - Present",
    description: ["Designed and developed custom websites for freelancers and small businesses.", "Built responsive, user-centered interfaces (UX/UI).","Developed cross-platform mobile applications (iOS & Android)","Created and implemented visual identities for digital products"],
    image: imgGIT
  },
  {
    id: 2,
    role: "Graphic & webdesigner",
    company: "La Folie des Senteurs",
    period: "2024-2025",
    description: ["Created custom product illustrations aligned with brand identity and marketing strategy.", "Redesigned and optimized the online store webpage to improve user experience and visual consistency.","Led SEO restructuring to enhance search engine visibility and organic traffic"],
    image: imgGIT
  },
  
]

const Experience = () => {
  return (
    <div id="Experiences" className="flex flex-col gap-20 mb-50">
      <Title title="Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 md:mt-0">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-primary">
                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
              </div>
              <span className="mt-2 text-sm">{skill.name}  </span>
            </div>
          ))}

        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex flex-col bg-base-200  p-5 rounded-xl shadow-lg">

              <div className="flex items-center">
                <div className="ml-4">
                  <h1 className="text-xl text-primary font-bold">
                    {experience.role} , {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>


              <ul className="list-disc ml-16 mt-2">
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
