import Title from "./Title"
import img from'../assets/portrait.webp'
import illustration from '../assets/illustration.png'
import { CodeXml, Figma, Smartphone } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Flutter developer",
        description: "I am a passionate Flutter developer with capabilities in building mobile applications",
        icon: <Smartphone className="text-primary scale 150"/>
    
    },
    {
        id: 2,
        title: "Web developer",
        description: "I have solid skills in web development, with experience in React, JavaScript, and TypeScript",
        icon: <CodeXml className="text-primary scale 150"/>
    
    },
    {
        id: 3,
        title: "Passionate about UI/UX",
        description: "I have some skills in UI/UX design, with a keen eye for creating intuitive and visually appealing user interfaces",
        icon: <Figma className="text-primary scale 150"/>
    
    }
]

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32"  id="About">
      <Title title="About Me" />
      <div className="md:h-screen flex justify-center items-center ">

        <div className="hidden  md:block">
            <img src={img} alt="" className="w-150 object-cover rounded-xl"
                
                />
        </div>
        
        <div className="md:ml-4 space-y-4">
            {aboutSections.map((section) => (
                <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100
                p-5 rounded-xl md:w-96 shadow-xl gradient-brand-border">

                    <div className="mb-2 md:mb-0">
                        {section.icon}
                    </div>

                    <div className="md:ml-4 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-1">
                            {section.title}
                        </h2>
                        <p className="text-sm">
                            {section.description}
                        </p>
                    </div>
                </div>
            ))
            
            }
        </div>
        </div> 
    </div>

  )
}

export default About  
