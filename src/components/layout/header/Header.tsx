import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-200">
      <header className="max-w-6xl mx-auto flex justify-between py-5 px-6 xl:px-0">   
        <div className="font-semibold text-blue-600 hover:text-gray-200 cursor-pointer">
          Muhammad Haikal
        </div>

        <nav className="flex gap-6">
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
            <FaLinkedin className="text-2xl hover:text-gray-200 cursor-pointer"/>
          </a>    
        </nav>
      </header>
    </div>
  );
};

export default Header;
