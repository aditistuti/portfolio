
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-playfair font-bold">Aarav Mehta</h2>
            <p className="text-gray-400 mt-2">Full-Stack Developer | AI Enthusiast | Cloud Computing</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:aarav.mehta@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/aarav-mehta" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/aaravmehta" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
        
        <div className="w-full h-px bg-gray-800 my-8"></div>
        
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aarav Mehta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
