import logo from '../assets/logo_round.png'
import iconWeb from '../assets/picto-10.png'
import iconGit from '../assets/picto-09.png'
import iconLinkedin from '../assets/picto-11.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-300 p-10">
            <aside>
                <img className="w-10"src={logo} />

                
                <p className="font-bold">
                    Elysabeth.
                    <br />
                    Student looking for an apprenticeship.
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="" target="_blank" rel='noopener noreferrer'>
                        <img className='w-8' src={iconWeb}></img>
                    </a>
                    <a href="" target="_blank" rel='noopener noreferrer'>
                        <img className='w-8' src={iconGit}></img>
                    </a>
                    <a href="" target="_blank" rel='noopener noreferrer'>
                        <img className='w-8' src={iconLinkedin}></img>
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
