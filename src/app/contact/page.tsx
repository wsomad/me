import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactPage: React.FC = () => {
    return (
        <div className="px-4 flex justify-center items-center min-h-32">
            <div className="flex flex-col items-center lg:flex-row lg:items-center">
                <h2 className="text-lg font-semibold text-black">Feel free to connect with me on</h2>
                <nav className="flex items-center space-x-4 mt-2 lg:mt-0 lg:ml-4">
                    <a
                    href="https://github.com/wsomad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    >
                    <FaGithub className="text-2xl hover:text-gray-300 cursor-pointer"/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/mhs-"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    >
                    <FaLinkedin className="text-2xl hover:text-gray-300 cursor-pointer"/>
                    </a>           
                </nav>
            </div>
        </div>
    )
}

export default ContactPage;
