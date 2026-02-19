import Title from "./Title"
import img from'../assets/portrait.webp'
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
    <div className="bg-base-300 p-10 mb-10 md:mb-32 flex flex-col gap-30"  id="About">
      <Title title="About Me" />

      <div className="flex justify-center items-center gap-5">
        <img src={img} alt="" className="w-50 object-cover rounded-xl"/>
        <p className="w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>

      <div className=" flex justify-center items-center mb-20">

  
        
        <div className="md:ml-4 space-y-4">
            {aboutSections.map((section) => (
                <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100
                p-5 rounded-xl  shadow-xl gradient-brand-border">

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
