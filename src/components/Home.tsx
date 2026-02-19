import { FileText } from "lucide-react"
import { Code } from "lucide-react"
import img from'../assets/portrait.webp'

const Home = () => {
    return (
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">

            <div className="flex flex-col fustify-end ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Hello, <br /> I'm {" "}
                    <span className="text-primary">
                        Elysabeth
                    </span> 
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    I'm a FrontEnd developper
                    <br /> looking for an <span className="text-primary">apprenticeship</span> position in
                    <br />web and mobile development
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="btn btn-primary w-fit">
                        <Code className="w-5 h-5"/>
                        Go to my projects
                    </a>
                    <a href="#" className="btn btn-soft btn-primary w-fit">
                        <FileText />
                        Download my CV
                    </a>
                </div>


            </div>
            <div className="md:ml-50">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-primary shadow-xl"
                style={{
                    borderRadius : "59% 41% 60% 40% / 48% 53% 47% 52% "
                }}
                />
            </div>
        </div>
    )
}

export default Home
