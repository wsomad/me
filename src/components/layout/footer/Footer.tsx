import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <div className="px-4 py-6 flex justify-center items-center border-t border-gray-200 mt-10">
            <div className="flex flex-row items-center gap-4">
                <h2 className="text-lg font-semibold text-black">Feel free to connect with me on</h2>
                <nav className="flex items-center space-x-4">
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

export default Footer;
