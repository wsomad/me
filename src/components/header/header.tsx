import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-300">
        <header className="max-w-7xl mx-auto flex items-center justify-between space-x-8 py-5 font-courier font-normal border-l border-r border-gray-300 px-6">   
          <Image
            src="/images/available-face.png" // Local image path
            alt="Available face"
            width={25} 
            height={25}
          />
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
        </header>
    </div>
  );
};

export default Header;
