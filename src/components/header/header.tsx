import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-300">
        <header className="max-w-7xl mx-auto flex items-center justify-end space-x-8 py-5 font-courier font-normal border-l border-r border-gray-300 px-6">
            {/* <p className="font-semibold text-2xl">Haikal</p> */}
            <nav className="flex items-center space-x-4">
                {/* <a href="#about" className="hover:text-gray-300">
                About
                </a>
                <a href="#project" className="hover:text-gray-300">
                Project
                </a> */}
                <FaGithub className="text-2xl hover:text-gray-300 cursor-pointer" />
                <FaLinkedin className="text-2xl hover:text-gray-300 cursor-pointer" />
            </nav>
        </header>
    </div>
  );
};

export default Header;
