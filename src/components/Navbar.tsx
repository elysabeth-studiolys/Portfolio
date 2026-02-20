import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href='#'
                className="flex items-center">

                <img src={logo} className="w-20"/>
            </a>

            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#About"
                        className="btn btn-soft btn-accent"
                    >
                        About me
                    </a>
                </li>
                <li>
                    <a href="#Experiences"
                        className="btn btn-soft btn-accent"
                    >
                        Experiences
                    </a>
                </li>
                <li>
                    <a href="#Projects"
                        className="btn btn-soft btn-accent"
                    >
                        Last projects
                    </a>
                </li>


            </ul>
        </div>
    )
}

export default Navbar
