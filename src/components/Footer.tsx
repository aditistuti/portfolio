
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#fbed96] to-[#abecd6] text-gray-900 py-12 shadow-inner mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-playfair font-bold">Aditi Stuti</h2>
            <p className="text-gray-600 mt-2">Full-Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:aditi.stuti@example.com" 
              className="hover:text-blue-500 transition-colors p-2 rounded-full bg-white/60 hover:bg-blue-50 shadow hover:scale-110 duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/aditi-stuti" 
              className="hover:text-blue-600 transition-colors p-2 rounded-full bg-white/60 hover:bg-blue-50 shadow hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/aditi-stuti"
              className="hover:text-gray-800 transition-colors p-2 rounded-full bg-white/60 hover:bg-gray-100 shadow hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="w-2/3 h-[2px] mx-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8 opacity-60 rounded" />

        <div className="text-center text-gray-500">
          <p className="opacity-80 tracking-wide text-sm">&copy; {new Date().getFullYear()} Aditi Stuti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

